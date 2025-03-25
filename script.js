document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-contato");
    const button = document.getElementById("submit-btn");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset();
    });

    // Efeito de clique no botão de envio
    button.addEventListener("click", function() {
        button.style.transform = "scale(0.9)";
        setTimeout(() => button.style.transform = "scale(1)", 200);
    });
});
