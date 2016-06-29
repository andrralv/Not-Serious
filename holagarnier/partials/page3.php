<?php
setcookie('word', 'hongo', time() + 360000, "/", "", 0);
?>
<h3>TADAA! Bienvenid@ al nivel 4!</h3>

<p id="file">Acá podés ver la parte III del ensayo [Decisiones...]:</p><a href="http://holagarnier.xyz/pdfs/decisiones.pdf" target="_blank">Abrir</a>
<p>
    Hay una banda de música experimental compuesta por algunos profesores de arquitectura, e inclusive el profesor
    <br/>Douglas Morales forma parte de ella, ¿sabés cual es el nombre?
</p>
<form id="myForm" action="<?php $_PHP_SELF ?>" method="GET">
    <input type="text" name="word" placeholder="Ingrese la palabra..." autocomplete="off" required/>
    <input type="submit" value="Avanzar"/>
</form>