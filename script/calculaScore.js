// Função para calcular o score do cliente

function calculaScore(faturamento, despesasFixas, despesasVariaveis, tempoAtivo, empreendeuAntes, possuiEmprestimo) {

    let score = 0;
    let margemLucro = (faturamento-despesasFixas-despesasVariaveis) / faturamento;

    if(faturamento <= 50000) {
        score = score + 50;
    }
    else if(faturamento > 50000 && faturamento <= 81000) {
        score = score + 100;
    }
    else if(faturamento > 81000) {
        score = score + 150;
    }

    if(margemLucro <= 0.10) {
        score = score + 50;
    }
    else if(margemLucro > 0.10 && margemLucro <= 0.30) {
        score = score + 100;
    }
    else if(margemLucro > 0.30) {
        score = score + 150;
    }

    if(tempoAtivo === '1') {
        score = score + 50;
    }
    else if(tempoAtivo === '1-3') {
        score = score + 100;
    }
    else if(tempoAtivo === '3+') {
        score = score + 150;
    }

    if(empreendeuAntes === 'sim') {
        score = score + 100;
    }
    else {
        score = score + 50;
    }

    if(possuiEmprestimo === 'sim') {
        score = score + 50;
    }
    else {
        score = score + 100;
    }

    return score;
};

export { calculaScore };