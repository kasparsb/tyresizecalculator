<?php
// Read package version so we can include built js and css
$pkg = json_decode(file_get_contents('package.json'));
$version = $pkg->version;
?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0">
    <title>Tyre size calculator</title>
    <!--link rel="stylesheet" href="build/app.min-<?php echo $version ?>.css" type='text/css' media='all' /-->
</head>
<body>
    <div class="app"></div>
    <!--script src="build/app.min-<?php echo $version ?>.js"></script-->
    <script src="build/app.js"></script>
</body>
</html>