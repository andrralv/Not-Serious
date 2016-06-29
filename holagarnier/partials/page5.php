<?php
setcookie('word', 'catedra', time() + 360000, "/", "", 0);
?>
    <h3>Excelente! Llegaste al ultimo nivel!</h3>
    <p id="file">Acá podés ver la parte V del ensayo [La cualidad sin nombre del siglo XXI]:</p><a href="http://holagarnier.xyz/pdfs/cualidad-sin-nombre.pdf" target="_blank">Abrir</a>
    <p>
        Ahora como premio, te tengo una sorpresa, vamos a ver una película.
        <br/>No, no tenés que bajar ni buscar nada de internet, la película ya se encuentra en
        tu computadora. Sólo tenés que prestar atención y realizar los siguientes pasos:
        <br/>
        <br/>
        <span id="mac">
            En OS X (mac): Tenés que presionar "ctrl + espacio" para que aparezca el buscador. (spotlight)
            Ahora, escribí "terminal" y presioná enter. Cuando te aparezca la terminal sólamente tenés que escribir
            en ella lo siguiente: "telnet towel.blinkenlights.nl".
        </span>
        <br/>
        <br/>
        <span id="win">
            En Windows: Tenés que presionar la tecla de inicio (windows) y escribir "turn windows features on and off".
            Ahora te aparecerá una ventana con algunas casillas, tenés que marcar la que dice "telnet client" y darle OK.
            Luego de que Windows haga lo suyo le das presionar a la tecla de inicio nuevamente y escribís "cmd", le das enter.
            Cuando te aparezca la terminal escribís: "telnet towel.blinkenlights.nl".
        </span>
        <br/>
        <br/>
        <span id="question">Ahora, cual fue la película que te apareció?</span>

    </p>
    <form id="myForm" action="<?php $_PHP_SELF ?>" method="GET">
        <input type="text" name="word" placeholder="Ingrese la palabra... " autocomplete="off" required/>
        <input type="submit" value="Avanzar"/>
    </form>
<?php
/**
 * Created by PhpStorm.
 * User: andre
 * Date: 6/28/2016
 * Time: 2:39 PM
 */