const fs = require('fs-extra')
const semver = require('semver');
const PQueue = require('p-queue');
const path = require( 'path' );
const gcs = require('@google-cloud/storage')({
  projectId: 'code-angularjs-org-338b8',
  keyFilename: 'code-angularjs-org.json'
});
const gcsBucket = 'code-angularjs-org-338b8.appspot.com';

const bucket = gcs.bucket(gcsBucket);

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}

module.exports = function(grunt) {

  function upload(files, basePath, zipped) {
    const queue = new PQueue({concurrency: 15});

    files.forEach(function(filePath, index) {
      var fromPath = path.join(basePath, filePath);

      const options = {
        destination: filePath
      }

      if (zipped) {
        options.metadata = {
          contentEncoding: 'gzip'
        }
      }

      queue.add(() => {
        return bucket.upload(fromPath, options).then(() => {
          console.log('uploaded ' + filePath)
        }).catch((error) => {
          queue.clear();
          grunt.util.error('Upload failed', error);
        });
      });

    });

    console.log('files queued: ', queue.size);

    return new Promise(function(resolve, reject) {
      queue.onEmpty().then(() => {

        if (queue.pending === 0) {
          console.log('success');
          resolve('success');
        }

      }).catch((error) => {
        grunt.util.error('Upload failed', error);
        resolve(error);
      });
    });

  }

  // this loads all the node_modules that start with `grunt-` as plugins
  require('load-grunt-tasks')(grunt);

  const version = grunt.option('target');

  grunt.initConfig({

    compress: {
      firebaseCodeDeploy: {
        options: {
          mode: 'gzip'
        },
        src: ['**'],
        cwd: version,
        expand: true,
        dest: 'upload/' + version + '/'
      }
    }
  });

  grunt.registerTask('gcs', function() {
    const doneFn = this.async();

    const deployVersion = grunt.option('target');
    if (!deployVersion) {
      console.log('No target version supplied. Use --target="<version>"');
      doneFn(false);
      return;
    }

    const glob = deployVersion + '/' + (grunt.option('filter') || '**/*');

    const files = grunt.file.expand({
      filter: 'isFile',
      cwd: 'upload/'
    }, glob);

    if (!files.length) {
      console.log('no files to deploy in upload/' + deployVersion);
      doneFn(false);
      return;
    }

    console.log('uploading files from ' + glob);

    upload(files, 'upload', true).then(function() {
      doneFn();
    });

  });

  grunt.registerTask('default', ['compress', 'gcs']);
}