<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") return;

$line = $_POST['command'];
$command = explode(" ", $line);

switch ($command[0]) {
    case "git":
        git($command);
        break;
    case "timeline":
        echo "----[X]-----[ ]-----[ ]-----[ ]-----[ ]-----[ ]<br>";
        echo "&nbsp;&nbsp;&nbsp;1980&nbsp;&nbsp;&nbsp;&nbsp;1985&nbsp;&nbsp;&nbsp;&nbsp;1995&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2000&nbsp;&nbsp;&nbsp;&nbsp;2010&nbsp;&nbsp;&nbsp;&nbsp;2024";
        break;
    default:
        echo "Bad command or file name<br><br>";
}

function git($command) {
    if (count($command) > 1 && $command[1] == "clone") {
        if (count($command) > 2 && substr($command[2], 0, 8) == "https://") {
            exec("git clone " . format($command[2]), $output);
        } elseif (count($command) < 3) {
            echo "fatal: Você deve especificar um repositório para clonar.<br><br>";
        } elseif (substr($command[2], 0, 8) != "https://") {
            echo "fatal: repositório '" . format($command[2]) . "' não existe";
        }
    } elseif (count($command) < 2) {
        echo "uso: git &lt;comando&gt; [&lt;args&gt;]";
    } elseif ($command[1] != "clone") {
        echo "git: '" . format($command[1]) . "' não é um comando git. Veja 'git --help'.";
    }
}

function format($arg) {
    if (str_contains($arg, '"') || str_contains($arg, "'")) {
        $quotes = array('"', "'");
        $arg = str_replace($quotes, "", $arg);
    }

    return $arg;
}
?>