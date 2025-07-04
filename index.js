document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const users = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioValido =users.find(user => user.username === username && user.password === password);

    if (usuarioValido){
        localStorage.setItem("usuarioLogado", username);
        window.location.href = "home.html"
    }
    else{
        message.style.color = "red";
        message.textContent = "Usuario e/ou Senha incorretos!"
    }
});