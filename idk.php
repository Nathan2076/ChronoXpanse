<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") return;

$line    = $_POST["command"];
$command = explode(" ", $line);
$level   = $_POST["level"];
$gitadd  = false;

switch ($command[0]) {
    case "git":
        git($command);
        break;
    case "timeline": case "tl": case "linhadotempo": case "ldt": case "lt":
        printTimeline($level);
        break;
    default:
        echo "Comando ou nome de arquivo incorreto<br><br>";
}

function git($command) {
    global $gitadd, $level;
    
    if (count($command) > 1 && $command[1] == "clone") {
        if (count($command) > 2 && $command[2] == "windows") {
            echo("booting");
        }
        elseif (count($command) < 3) {
            echo "fatal: Você deve especificar um repositório para clonar.<br><br>";
        }
        elseif ($command[2] != "windows") {
            echo "fatal: repositório '" . format($command[2]) . "' não existe";
        }
    }
    elseif (count($command) > 1 && $command[1] == "add" && $level == 1985) {
        $gitadd = true;
    }
    elseif (count($command) > 1 && $command[1] == "commit" && $level == 1985) {
        if (count($command) > 2 && $command[2] == "-m") {
            if (count($command) > 3) {
                $commit = "";
                for ($i = 3; $i < count($command); $i++) {
                    $commit .= $command[$i] . " ";
                }
                echo "[main f3b3714] " . format($commit) . "<br>&nbsp;2 arquivos alterados, 133 inserções(+), 7 exclusões(-)";
            }
            else {
                echo "erro: a opção `m' requer um valor";
            }
        }
        elseif (count($command) < 3) {
            echo "Abortando commit devido a uma mensagem de commit vazia.";
        }
    }
    elseif (count($command) < 2) {
        echo "uso: git &lt;comando&gt; [&lt;args&gt;]";
    }
    elseif ($command[1] != "clone") {
        echo "git: '" . format($command[1]) . "' não é um comando git.";
    }
}

function printTimeline($level) {
    if ($level != 1985) {
        echo "----[X]-----[ ]-----[ ]-----[ ]-----[ ]-----[ ]<br>";
        echo "&nbsp;&nbsp;&nbsp;1980&nbsp;&nbsp;&nbsp;&nbsp;1985&nbsp;&nbsp;&nbsp;&nbsp;1995&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2000&nbsp;&nbsp;&nbsp;&nbsp;2010&nbsp;&nbsp;&nbsp;&nbsp;2024";
    } else {
        echo "----[X]-----[X]-----[ ]-----[ ]-----[ ]-----[ ]<br>";
        echo "&nbsp;&nbsp;&nbsp;1980&nbsp;&nbsp;&nbsp;&nbsp;1985&nbsp;&nbsp;&nbsp;&nbsp;1995&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2000&nbsp;&nbsp;&nbsp;&nbsp;2010&nbsp;&nbsp;&nbsp;&nbsp;2024";
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