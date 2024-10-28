<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") return;

$line    = $_POST["command"];
$command = explode(" ", $line);
$level   = $_POST["level"];
$gitadd  = false;

switch ($command[0]) {
    case "GIT": case "git":
        git($command);
        break;
    case "TIMELINE": case "timeline":
    case "TL": case "tl":
    case "LINHADOTEMPO": case "linhadotempo":
    case "LDT": case "ldt":
    case "LT": case "lt":
        printTimeline($level);
        break;
    case "WIN": case "win":
        win();
    default:
        echo "Comando ou nome de arquivo incorreto<br><br>";
        break;
}

function git($command) {
    global $gitadd, $level;
    
    if (count($command) > 1 && $command[1] == "clone") {
        if (count($command) > 2 && $command[2] == "windows" && $level == 1980) {
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
                echo "[main f3b3714] " . format($commit) . "<br>&nbsp;1 arquivo alterado, 133 inserções(+), 7 exclusões(-)";
            }
            else {
                echo "erro: a opção `m' requer um valor";
            }
        }
        elseif (count($command) < 3) {
            echo "Abortando commit devido a uma mensagem de commit vazia.";
        }
    }
    elseif (count($command) > 1 && $command[1] == "push" && $level == 1985) {
        echo "Para https://github.com/Nathan2076/ChronoXpanse.git<br>&nbsp;<span class='error1985'>! [rejeitado]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;main -> main (obter primeiro)<br><span class='error1985'>erro: falha ao enviar algumas refs para 'https://github.com/Nathan2076/ChronoXpanse.git'<br><span class='warning1985'>dica: Atualizações rejeitadas por estarem desatualizadas do repositório remoto.</span><br><span class='warning1985'>dica: Isso é normalmente causado por conflitos entre arquivos locais e remotos.</span><br><span class='warning1985'>dica: Use 'git pull' para importar os arquivos que faltam e digite</span><br><span class='warning1985'>dica: 'win' para entrar no Windows e editá-los.</span>";
    }
    elseif (count($command) > 1 && $command[1] == "pull" && $level == 1985) {
        echo "remoto: Enumerando objetos: 1, concluído.<br>remoto: Contando objetos: 100% (1/1), concluído.<br>remoto: Compactando objetos: 100% (1/1), concluído.<br>remoto: Total 1 (delta 1), reutilizado 1 (delta 1), pacote reutilizado 0 (de 0)<br>Descompactando objetos: 100% (1/1), 972 bytes | 81.00 KiB/s, concluído.<br>De https://github.com/Nathan2076/ChronoXpanse<br>&nbsp;&nbsp;&nbsp;f84b07d..be820ce&nbsp;&nbsp;main&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> origin/main<br>Atualizando f84b07d..be820ce<br>&nbsp;WIN.EXE | 0<br>&nbsp;1 arquivo alterado, 0 inserções(+), 0 exclusões(-)<br>&nbsp;cria modo 100644 WIN.EXE";
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

function win() {
    global $level;

    if ($level == 1985) {
        echo "booting";
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
