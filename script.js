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
        case (pontuacao <= 10):
            personagem = 'Arthen - O Aventureiro';
            imagemPersonagem = 'Imagens/Aventureiro.jpg'; // Substitua pelo caminho real da imagem
            break;
        case (pontuacao <= 15):
            personagem = 'Eldor - O Pensador';
            imagemPersonagem = 'Imagens/Sábio.jpg'; // Substitua pelo caminho real da imagem
            break;
        case (pontuacao <= 20):
            personagem = 'Kael - O Destemido';
            imagemPersonagem = 'Imagens/Destemido.jpg'; // Substitua pelo caminho real da imagem
            break;
        default:
            personagem = 'Lyra - O Criativo';
            imagemPersonagem = 'Imagens/Criativo.jpg'; // Substitua pelo caminho real da imagem
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
}
