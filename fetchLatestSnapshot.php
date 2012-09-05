<html>
  <head>
    <title>Update site from: GitHub master</title>
  </head>
<body>
  <pre><?php echo `date`; ?></pre>
  <pre><?
    $ver = $_GET['ver'];
    $ciBase = 'http://ci.angularjs.org/job/angular.js-angular-v1.0.x/ws/build/';
    $url = $ciBase.'angular-'.$ver.'.zip';
    if ( !$ver or !preg_match("/^[\.\-\d\w]+$/", $ver) ) {
      echo 'ERROR: No version specified';
    } else {
      echo 'Fetching: <a href="'.$url.'">'.$url.'</a><br>';
      shell_exec('wget '.$url.' -O angular-snapshot.zip');
      if ( !file_exists('angular-snapshot.zip') ) {
        echo 'Error: Invalid URL: <a href="'.$url.'">'.$url.'</a>';
      } else {
        $out = shell_exec('unzip angular-snapshot.zip');
        if( !$out ) {
          echo 'Error: Not a valid ZIP file';
        } else {
          echo $out;
          if ( !file_exists('angular-'.$ver) ) {
            echo 'Error: Zip file does not contain angular-'.$ver.' directory.';
          } else {
            shell_exec('mv snapshot snapshot.old');
            shell_exec('mv angular-' . $ver . ' snapshot');
            shell_exec('rm -rf angular-snapshot.zip');
            shell_exec('rm -rf snapshot.old');

            echo 'docs.angularjs.org now serving: '.$ver;
          }
        }
      }
    }
  ?></pre>
</body>
</html>
