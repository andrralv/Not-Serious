<?php
function navBar($arg) {
    $msg = "";
    switch ($arg) {
        case ('reinrag'):
            $msg .= "<ul><li>";
            $msg .= "<a href='xyz.php?word=reinrag'>Nivel 2</a> |&nbsp;";
            $msg .= "</li></ul>";
            return $msg;
        case ('1984'):
            $msg .= "<ul><li>";
            $msg .= "<a href='xyz.php?word=reinrag'>Nivel 2</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=1984'>Nivel 3</a>";
            $msg .= "</li></ul>";
            return $msg;
        case ('hongo'):
            $msg .= "<ul><li>";
            $msg .= "<a href='xyz.php?word=reinrag'>Nivel 2</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=1984'>Nivel 3</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=hongo'>Nivel 4</a> ";
            $msg .= "</li></ul>";
            return $msg;
        case ('autoperro'):
            $msg .= "<ul><li>";
            $msg .= "<a href='xyz.php?word=reinrag'>Nivel 2</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=1984'>Nivel 3</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=hongo'>Nivel 4</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=autoperro'>Nivel 5</a>";
            $msg .= "</li></ul>";
            return $msg;
        case ('catedra'):
            $msg .= "<ul><li>";
            $msg .= "<a href='xyz.php?word=reinrag'>Nivel 2</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=1984'>Nivel 3</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=hongo'>Nivel 4</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=autoperro'>Nivel 5</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=catedra'>Nivel 6</a>";
            $msg .= "</li></ul>";
            return $msg;
        case ('starwars'):
            $msg .= "<ul><li>";
            $msg .= "<a href='xyz.php?word=reinrag'>Nivel 2</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=1984'>Nivel 3</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=hongo'>Nivel 4</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=autoperro'>Nivel 5</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=catedra'>Nivel 6</a> |&nbsp;";
            $msg .= "</li>";
            $msg .= "<li>";
            $msg .= "<a href='xyz.php?word=starwars'>Final</a>";
            $msg .= "</li></ul>";
            return $msg;
        default:
            $msg = +"Cookie mal formada";
            return $msg;
    }
}
?>