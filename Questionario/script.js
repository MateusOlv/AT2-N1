function calcularPontuacao() {
    let pontuacao = 0;

    // Obter todas as respostas
    for (let i = 1; i <= 10; i++) {
        const resposta = document.querySelector(`input[name="q${i}"]:checked`);
        if (resposta) {
            pontuacao += parseInt(resposta.value);
        } 
    }

    // Avaliar qual personagem com base na pontuação e associar uma imagem
    let personagem = '';
    let imagemPersonagem = '';

    switch (true) {
        default:
            personagem = 'Arthen, o Aventureiro';
            imagemPersonagem = '../Imagens/Aventureiro.jpg';
            break;
        case (pontuacao == 10):
            personagem = 'Kael, o Destemido';
            imagemPersonagem = '../Imagens/Destemido.jpg'; 
            break;
        case (pontuacao == 20):
            personagem = 'Eldor, o Sábio';
            imagemPersonagem = '../Imagens/Sábio.jpg'; 
            break;
    }

    // Limpar o conteúdo da página
    const form = document.getElementById('quizForm');
    form.innerHTML = ''; // Remove o formulário

    // Exibir o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Sua pontuação é: ${pontuacao}<br>Você seria: ${personagem}`;

    // Exibir a imagem correspondente ao personagem
    const imagemDiv = document.getElementById('imagemPersonagem');
    imagemDiv.innerHTML = `<img src="${imagemPersonagem}" alt="${personagem}">`;

    // Adicionar o botão de refazer o teste
    const refazerDiv = document.getElementById('refazerTeste');
    refazerDiv.innerHTML = `<button onclick="refazerTeste()">Refazer o Teste</button>`;
}

function refazerTeste() {
     window.location.href = '../index.html'
}
