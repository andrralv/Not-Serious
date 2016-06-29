<!DOCTYPE html>
<html>
    <head>
        <title>holagarnier</title>
        <link rel="stylesheet" type="text/css" href="css/pages.css"/>
        <link href='https://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
        <link rel="icon" type="image/png" href="icon.png" sizes="16x16"/>
    </head>
    <body>
    <?php
        if (isset($_GET["word"])) {
            $var = strtolower($_GET["word"]);
            $var = str_replace(' ', '', $var);
            switch ($var) {
                case "reinrag":
                    @include('partials/page1.php');
                    break;
                case "1984":
                    @include('partials/page2.php');
                    break;
                case "hongo":
                    @include('partials/page3.php');
                    break;
                case "autoperro":
                    @include('partials/page4.php');
                    break;
                case "catedra":
                    @include('partials/page5.php');
                    break;
                case ("starwars"):
                    @include('partials/final.php');
                    break;
                default:
                    @include('partials/error.php');
                    break;
            }
        } else {
            echo "<p>Cookie was not set.</p>";
        }
    ?>
    <?php include('partials/footer.php'); ?>
    </body>
</html>
