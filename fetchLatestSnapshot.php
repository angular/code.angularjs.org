<html>
  <head>
    <title>Update site from: GitHub master</title>
  </head>
<body>
  <pre><?php echo `date`; ?></pre>
  <pre><?
    $ver = $_GET['ver'];
    $ciBase = 'http://ci.angularjs.org/job/angular.js-angular-v1.0.x/ws/build/pkg/';
    if ($ver) {
      echo shell_exec('wget '.$ciBase.$ver.'/'.'angular-'.$ver.'.tgz -O angular-snapshot.tgz');
      echo shell_exec('tar -xf angular-snapshot.tgz');
      echo shell_exec('mv snapshot snapshot.old');
      echo shell_exec('mv angular-' . $ver . ' snapshot');
      echo shell_exec('rm -rf angular-snapshot.tgz');
      echo shell_exec('rm -rf snapshot.old');

      echo 'docs.angularjs.org now serving: '.$ver;
    } else {
      echo 'ERROR: No version specified';
    }
  ?></pre>
</body>
</html>
