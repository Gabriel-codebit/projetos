// Variáveis de Resultado 
let visor = "";
let resultado = "";

// Função para atualiar o valor do Visor
function atualizarVisor() {
    document.getElementById("visor").textContent = visor;
}

// Função para atualizar o valor do resultado
function atualizarResultado() {
    document.getElementById("visor").textContent = resultado;
}

// Adiciona eventos de clique aos botões de números
for (let i = 0; i <= 9; i++) {
    document.getElementById("botao" + i).addEventListener("click", function () {
        if (visor == resultado) {
            visor = "";
        }
        visor += i;
        atualizarVisor();
    })
};

// Função para apagar os valores do visor
document.getElementById("botaoLimpar").addEventListener("click", function () {
    visor = "";
    resultado = "";
    atualizarVisor();
});

document.getElementById("botaodecimal").addEventListener("click", function () {
    visor += ".";
    atualizarVisor();
});

document.getElementById("botaoDivisao").addEventListener("click", function () {
    visor += "/";
    atualizarVisor();
});

document.getElementById("botaoMultiplicacao").addEventListener("click", function () {
    visor += "*";
    atualizarVisor();

});

document.getElementById("botaoSubtracao").addEventListener("click", function () {
    visor += "-";
    atualizarVisor();
});

document.getElementById("botaoSomar").addEventListener("click", function () {
    visor += "+";
    atualizarVisor();
});

document.getElementById("botaoExpoente").addEventListener("click", function () {
    visor += "**";

    atualizarVisor();
});

document.getElementById("botaoDel").addEventListener("click", function () {

    // Obtém o elemento HTML com o ID "visor"  
    let elementoVisor = document.getElementById("visor");

    // Obtém o conteúdo do elemento e remove o último caractere
    let conteudoVisor = elementoVisor.innerHTML;
    let novoConteudo = conteudoVisor.substring(0, conteudoVisor.length - 1);

    // Atualiza o conteúdo do elemento com a nova expressão
    elementoVisor.innerHTML = novoConteudo;

    // Atualiza a variável "visor" com a nova expressão
    visor = novoConteudo;

    atualizarVisor();

    // Atualizando o valor da expressão "resultado"
    resultado = eval(visor);

});

// Adicionando evento de Resultado no botao igual "="
document.getElementById("botaoIgual").addEventListener("click", function () {
    resultado = eval(visor);
    atualizarResultado();
    visor = resultado;
});