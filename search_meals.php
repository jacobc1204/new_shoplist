<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"/>
    <link rel="manifest" href="\shoplist_app\manifest.json"></link>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>My Shopping List | Search</title>
</head>
<body>
    <?php require('header.html') ?>
    <section>
        <input type="text" id="query"/>
        <input type="submit" id="submit" />
    </section>
    <?php require('footer.html') ?>
</body>
</html>