function calcularPontuacao() {
    let pontuacao = 0;

    // Obter todas as respostas
    for (let i = 1; i <= 10; i++) {
        const resposta = document.querySelector(`input[name="q${i}"]:checked`);
        if (resposta) {
            pontuacao += parseInt(resposta.value);
        }
    }

    // Avaliar qual personagem com base na pontuação
    let personagem = '';

    switch (true) {
        case (pontuacao <= 10):
            personagem = 'Personagem A - O Aventurador';
            break;
        case (pontuacao <= 15):
            personagem = 'Personagem B - O Pensador';
            break;
        case (pontuacao <= 20):
            personagem = 'Personagem C - O Destemido';
            break;
        default:
            personagem = 'Personagem D - O Criativo';
            break;
    }

    // Exibir o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Sua pontuação é: ${pontuacao}<br>Você seria: ${personagem}`;
}
