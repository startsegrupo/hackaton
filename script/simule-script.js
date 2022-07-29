import { calculaScore } from '../script/calculaScore.js';

const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));

// Dados do cliente
let campoNomeEmpresa = document.querySelector('#nomeEmpresa');
let campoCNPJ = document.querySelector('#cnpj');
let campoNomeSocio = document.querySelector('#nomeSocio');
let campoCPF = document.querySelector('#cpf');
let campoCep = document.querySelector('#cep');
let campoEndereco = document.querySelector('#endereco');
let campoCidade = document.querySelector('#cidade');
let campoEstado = document.querySelector('#estado');
let campoAtividadePrincipal = document.querySelector('#atividadePrincipal');
let campoTelefoneContato = document.querySelector('#telefoneContato');
let campoTelefoneRecado = document.querySelector('#telefoneRecado');
let campoEmail = document.querySelector('#nomeSocio');
let campoFatBruto = document.querySelector('#fatBruto');
let campoDespesasFixas = document.querySelector('#despesasFixas');
let campoDespesasVariaveis = document.querySelector('#despesasVariaveis');
let campoTempoAtividade = document.querySelector('#tempoAtividade');
let campoJaEmpreendeu = document.querySelector('#empreendeuAntes');
let campoPossuiEmprestimo = document.querySelector('#possuiEmprestimo');
let campoConcordaTermos = document.querySelector('#concordaTermos');
let botaoCalcular = document.querySelector('#botaoCalcular');
let botaoLimpar = document.querySelector('#botaoLimpar');

let termosaceitos = false;

campoConcordaTermos.addEventListener('change', (e) => {
    if(e.target.checked) {
        termosaceitos = true;
    }
    else {
        termosaceitos = false;
    }
});

botaoCalcular.addEventListener('click', () => {

    let faturamento = campoFatBruto.value;
    let despesasFixas = campoDespesasFixas.value;
    let despesasVariaveis = campoDespesasVariaveis.value;
    let tempoAtivo = campoTempoAtividade.value;
    let empreendeuAntes = campoJaEmpreendeu.value;
    let possuiEmprestimo = campoPossuiEmprestimo.value;

    if(termosaceitos === true) {
        let score = calculaScore(faturamento, despesasFixas, despesasVariaveis, tempoAtivo, empreendeuAntes, possuiEmprestimo);
        alert(
            `Parabéns! 
            Seu score é de ${score} pontos.
            Aumente seu score inscrevendo-se na nossa jornada!`);
    }
    else {
        alert('Necessário concordar com os termos!');
    }
});

botaoLimpar.addEventListener('click', () => {
    termosaceitos = false;
    document.querySelector("#simule-form").reset();
});



