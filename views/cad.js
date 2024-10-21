document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    const togglePasswordConfirm = document.getElementById('togglePasswordConfirm');
    const passwordConfirm = document.getElementById('passwordconfirm');

    togglePassword.addEventListener('click', function () {

        const type = password.type === 'password' ? 'text' : 'password';
        password.type = type;

        this.textContent = type === 'password' ? '🐵' : '🙈';
    });

    togglePasswordConfirm.addEventListener('click', function () {
        const type = passwordConfirm.type === 'password' ? 'text' : 'password';
        passwordConfirm.type = type;
        this.textContent = type === 'password' ? '🐵' : '🙈';
    });
});

function Validate() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordconfirm = document.getElementById('passwordconfirm').value;

    if (!name || !email || !password || !passwordconfirm) {
        alert("Preencha todos os campos obrigatórios!");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
        alert("Digite um email válido!");
        return false;
    }

    if (password !== passwordconfirm) {
        alert("A confirmação da senha não coincide com a senha!");
        return false;
    }

    if (password.length < 8) {
        alert("A senha precisa ter no minimo 8 caracteres!");
        return false;
    }

    var isValid = true

    if (isValid) {
        alert("Cadastro finalizado com sucesso!");
        // window.location.href = '../index.html';
    }

}