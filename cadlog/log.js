document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    togglePassword.addEventListener('click', function () {

        const type = password.type === 'password' ? 'text' : 'password';
        password.type = type;

        this.textContent = type === 'password' ? '👁️' : '🙈';
    });
});

function Validate(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Preencha todos os campos obrigatórios!");
        return false;
    }

    if (password.length < 8) {
        alert("A senha precisa ter no minimo 8 caracteres!");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
        alert("Digite um email válido!");
        return false;
    }

    var isValid = true

    if (isValid) {
        alert("Login finalizado com sucesso!");
        window.location.href = '../index.html';
    }
}