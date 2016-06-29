<?php if (!isset($_COOKIE['word'])) {
    setcookie('word', 'reinrag', time() + 360000, "/", "", 0);
    }
?>
<h3>Bravo! Has avanzado al nivel 2!</h3>
<p id="file">Acá podés ver la parte I del ensayo [Abstracto e introducción]:</p><a href="http://holagarnier.xyz/pdfs/introduccion.pdf" target="_blank">Abrir</a>

<p>
    Ahora, yo sé que te puede dar pereza, pero resulta que hay un libro que me gusta mucho y lo menciono en el ensayo.
    <br/>El libro fue escrito en 1949 y el título es un número, ¿sabés cual es?
</p>
<form id="myForm" action="<?php $_PHP_SELF ?>" method="GET">
    <input type="text" name="word" placeholder="Ingrese la palabra..." autocomplete="off" required/>
    <input type="submit" value="Avanzar"/>
</form>