// Função para gerar a senha
function gerarSenha() {
    const tamanho = document.querySelector('#tamanho').value; // Tamanho da senha
    const incluirNumeros = document.querySelector('#numeros').checked; // Números
    const incluirMaiusculas = document.querySelector('#maiusculas').checked; // Letras maiúsculas
    const incluirMinusculas = document.querySelector('#minusculas').checked; // Letras minúsculas
    const incluirSimbolos = document.querySelector('#simbolos').checked; // Símbolos
    const palavra = document.querySelector('#palavra').value; // Palavra-chave do usuário

    // Verificar se o tamanho da senha é válido
    if (tamanho <= 0 || isNaN(tamanho)) {
        alert('Por favor, insira um tamanho válido para a senha.');
        return;
    }

    // Definir os possíveis caracteres
    let caracteres = '';
    if (incluirNumeros) caracteres += '0123456789';
    if (incluirMaiusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (incluirMinusculas) caracteres += 'abcdefghijklmnopqrstuvwxyz';
    if (incluirSimbolos) caracteres += '!@#$%^&*()-_=+[{]}|;:,.<>?';

    // Se nenhuma opção for selecionada, não gerar senha
    if (!caracteres && !palavra) {
        alert('Por favor, selecione ao menos uma opção ou insira uma palavra para gerar a senha!');
        return;
    }

    // Garantir que a palavra esteja na senha e que o tamanho da senha seja suficiente
    let senha = palavra;
    if (senha.length > tamanho) {
        alert('A palavra inserida é maior que o tamanho da senha!');
        return;
    }

    // Gerar a senha aleatória com o restante dos caracteres
    while (senha.length < tamanho) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }

    // Exibir a senha no <output>
    document.querySelector('#senhaOutput').textContent = senha;
}

// Adicionar o evento de clique no botão
document.querySelector('#criarBtn').addEventListener('click', gerarSenha);
