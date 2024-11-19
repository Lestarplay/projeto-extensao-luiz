function validarCampos() {
    // Obtém os valores dos campos de input
    const nome = document.getElementById("campoNome").value;
    const email = document.getElementById("campoEmail").value;
    const telefone = document.getElementById("campoTelefone").value;

    // Verifica se algum dos campos está vazio
    if (nome.trim() === "" || email.trim() === "" || telefone.trim() === "") {
        // Exibe uma mensagem de alerta e impede o redirecionamento
        alert("Por favor, preencha todos os campos antes de continuar.");
        return false; // Impede o redirecionamento
    } else {
        // Se todos os campos estiverem preenchidos, permite o redirecionamento
        return true;
    }
}  