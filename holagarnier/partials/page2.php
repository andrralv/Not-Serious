<?php
    setcookie('word', '1984', time() + 360000, "/", "", 0);
?>
<h3>Ja! Estás en el nivel 3!</h3>

<p id="file">Acá podés ver la parte II del ensayo [Revisita al mundo feliz]:</p><a href="http://holagarnier.xyz/pdfs/revisita-al-mundo-feliz.pdf" target="_blank">Abrir</a>

<p>
    Mmm no se me ocurre una nueva pista... ugh hay que matar tiempo .. mientras tanto, te has puesto a pensar..,
    <br/>cuando fue la última vez que viste la página de Wikipedia de la escuela de arqui?
</p>
<form id="myForm" action="<?php $_PHP_SELF ?>" method="GET">
    <input type="text" name="word" placeholder="Ingrese la palabra..." autocomplete="off" required/>
    <input type="submit" value="Avanzar"/>
</form>