document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if (username === usuarioCorreto && password === senhaCorreta){
        localStorage.setItem("usuarioLogado", username);
        window.location.href = "home.html"
    }
    else{
        message.style.color = "red";
        message.textContent = "Usuario e/ou Senha incorretos!"
    }
});