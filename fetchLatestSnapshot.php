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
      shell_exec('wget '.$url.' -O angular-snapshot.zip');
      if ( !file_exists('angular-snapshot.zip') ) {
        echo 'Error: Invalid URL: <a href="'.$url.'">'.$url.'</a>';
      } else {
        if( !($out = shell_exec('unzip angular-snapshot.zip')) ) {
          echo 'Error: Not a valid ZIP file';
        } else {
          echo $out;
          if ( !file_exists('angular-'.$ver) ) {
            echo 'Error: Zip file does not contain angular-'.$ver.' directory.';
          } else {
            `mv snapshot snapshot.old`;
            `mv angular-' . $ver . ' snapshot`;
            `rm -rf angular-snapshot.zip`;
            `rm -rf snapshot.old`;
            
            echo 'docs.angularjs.org now serving: '.$ver;
          }
        }
      }
    }
  ?></pre>
</body>
</html>
