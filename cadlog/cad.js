function Validate()
{
    let name            = document.getElementById('name').value;
    let email           = document.getElementById('email').value;
    let password        = document.getElementById('password').value;
    let passwordconfirm = document.getElementById('passwordconfirm').value;

    if (!name || !email || !password || !passwordconfirm)
    {
        alert("Preencha todos os campos obrigatórios!");
    } else 
    {
        alert("Cadastro efetuado com sucesso!")
    }

    if (){

    }
}