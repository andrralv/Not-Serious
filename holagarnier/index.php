<!DOCTYPE html>
<head>
    <title>holagarnier</title>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link href='https://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
</head>
    <body>
        <div id="wrapper">
            <p>Hola Garnier. Vamos a jugar un juego.</p>
            <div id="info">
                <?php include("partials/browserRead.php"); ?>
            </div>
            <p id="spooky">
                Eso es tan sólo una parte de la información que puedo obtener de vos sin recurrir a los malos métodos,
                y eso es tan sólo una mínima parte de la información que las grandes corporaciones pueden obtener de vos.
            </p>
            <p id="cifrado">
                Muy seguramente te estás preguntando por qué el ensayo que has recibido está un poco dificil de leer,
                la razón es que está cifrado. Tiene una manera muy simple de descifrar llamada "el Cifrado de Julio César",
                sí, él lo inventó. Pero no creo que vos querás pasar un par de horas descifrándolo.
            </p>

            <p id="descripcion">
                Ahora, el texto está dividido en 6 partes; la introducción, cuatro capítulos, y la conclusión.
                Tu deber será darme una palabra secreta que tenés que descubrir al resolver 6 adivinanzas simples. Si la palabra que
                ingresás está correcta, podés avanzar a leer la siguiente sección hasta terminar el ensayo. Finalmente te daré
                un archivo PDF con el ensayo completo si lo descifrás todo.
            </p>
            <p id="pista1">
                La primera pista se encuentra escondida dentro de esta misma página, y no, no está en el texto que ya leíste.
                <br/><p>Ctrl + ?</p>
            </p>
            <form id="myForm" action="xyz.php" method="GET">
                <input type="text" name="word" placeholder="Ingrese la palabra..." autocomplete="off" required"/>
                <input type="submit" value="Avanzar"/>
            </form>
            <h1 id='hideMe'>reinrag</h1>
            <div id="nav">
            <?php
                @include('partials/navigation.php');
                if (isset($_COOKIE['word'])) {
                    $var = $_COOKIE['word'];
                    echo navBar($var);
                } else {
                    // do nothing
                }
            ?>
            </div>
        </div>
    </body>
<!html>