<?php
setcookie('word', 'autoperro', time() + 360000, "/", "", 0);
?>
    <h3>Correcto! Llegaste al nivel 5!</h3>
<p id="file">Acá podés ver la parte IV del ensayo [El nuevo paradigma]:</p><a href="http://holagarnier.xyz/pdfs/nuevo-paradigma.pdf" target="_blank">Abrir</a>
    <p>
        Hace muchos años existió un bar al que acudían todos los estudiantes de arquitectura (y según he escuchado)
        había mucha fiesta en este. El bar se localizaba contiguo al actual terraU en la calle de la amargura, ahora es una
        casa de color amarillo. ¿Cuál era el nombre de ese bar?
    </p>
    <form id="myForm" action="<?php $_PHP_SELF ?>" method="GET">
        <input type="text" name="word" placeholder="Ingrese la palabra..." autocomplete="off" required/>
        <input type="submit" value="Avanzar"/>
    </form>
