<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <link rel="stylesheet" type="text/css" media="screen" href="views/cadlog.css">
    <link rel="stylesheet" type="text/css" media="screen" href="cadlog.css">
    <script src='cad.js'></script>
</head>

<body>
    <header>
        <img alt="Logo" class="logo" src="views/cadlog/logo.png">
        <div class="info">
            <a href="../index.html">início:)</a>
        </div>
    </header>
    <div id="main">
        <div class="signup">
            <form class="form" method="POST" action="../controllers/cadastrar.php">
                <div class="maintitle">
                    <h1>Cadastro</h1>
                </div>
                <div class="line"></div>
                <div class="subtitle">
                    <p>Para continuar seu Cadastro <br>solicitamos:</p>
                </div>
                <div class="form-group">
                    <label for="name">Nome</label>
                    <input type="text" id="name" name="name" placeholder="" autocomplete="on">
                </div>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="text" id="email" name="email" placeholder="" autocomplete="on">
                </div>
                <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password" autocomplete="on">
                    <i id="togglePassword" class="toggle-password">🐵</i>
                </div>
                <div class="announce">
                    <p>*A senha precisa ter no minimo 8 caracteres</p>
                </div>
                <div class="form-group">
                    <label for="passwordconfirm">Confirme a Senha</label>
                    <input type="password" id="passwordconfirm" name="passwordconfirm" autocomplete="on">
                    <i id="togglePasswordConfirm" class="toggle-password">🐵</i>
                </div>
                <div class="button">
                    <input type="submit" onclick="Validate()" value="Cadastrar">
                </div>
            </form>
        </div>
    </div>
    <footer>
        
    </footer>
</body>

</html>