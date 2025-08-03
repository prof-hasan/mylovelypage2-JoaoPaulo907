/* local storage */

if(localStorage.getItem("pts") === null)
    localStorage.setItem("pts", 0);
let pts = parseInt(localStorage.getItem("pts"));

function Bool(chave) {
    return localStorage.getItem(chave) === "true";
}

if(localStorage.getItem("pVez_p1") === null)
    localStorage.setItem("pVez_p1", true);
let pVez_p1 = Bool("pVez_p1");

if(localStorage.getItem("pVez_p2") === null)
    localStorage.setItem("pVez_p2", true);
let pVez_p2 = Bool("pVez_p2");

if(localStorage.getItem("pVez_segredo") === null)
    localStorage.setItem("pVez_segredo", true);
let pVez_segredo = Bool("pVez_segredo");

/* elementos */

let resp1 = document.getElementById("resp1");
let resp2 = document.getElementById("resp2");
let botao1 = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");

/* funções */

function verif1() {
    if(input1.value == "Outono" || input1.value == "outono") {
        if(pVez_p1) {
            acerto1();
            resp1.innerHTML = `Parabéns! você acertou!<br>Pontuação atual: ${pts} / 3`;
            resp1.style.visibility = "visible";
        } else {
            resp1.innerHTML = `Você já acertou essa pergunta...<br>Pontuação atual: ${pts} / 3`;
            resp1.style.visibility = "visible"
        }
    } else {
        resp1.textContent = `Você errou...`;
        resp1.style.visibility = "visible";
    }
}

function verif2() {
    if(input2.value == "Penny" || input2.value == "penny") {
        if(pVez_p2) {
            acerto2();
            resp2.innerHTML = `Parabéns! você acertou!<br>Pontuação atual: ${pts} / 3`;
            resp2.style.visibility = "visible";
        } else {
            resp2.innerHTML = `Você já acertou essa pergunta...<br>Pontuação atual: ${pts} / 3`;
            resp2.style.visibility = "visible";
        }
    } else {
        resp2.textContent = `Você errou...`;
        resp2.style.visibility = "visible";
    }
}

function acerto1() {
    pts++;
    localStorage.setItem("pts", pts);
    pVez_p1 = false;
    localStorage.setItem("pVez_p1", false);
}

function acerto2() {
    pts++;
    localStorage.setItem("pts", pts);
    pVez_p2 = false;
    localStorage.setItem("pVez_p2", false);
}

function limpar() {
    resp1.textContent = `.`;
    resp1.style.visibility = "hidden";

    resp2.textContent = `.`;
    resp2.style.visibility = "hidden";

    input1.value = ``;
    input2.value = ``;
}

/* input */

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

input1.addEventListener("keydown", e => {
    if(e.key == 'Enter') verif1();
});

input1.addEventListener("focusout", e => {
    const prox = e.relatedTarget;
    if(prox === botao1) return;
    else limpar();
});

botao1.addEventListener("blur", () => {
    limpar();
});

input2.addEventListener("keydown", e => {
    if(e.key == 'Enter') verif2();
});

input2.addEventListener("focusout", e => {
    const prox = e.relatedTarget;
    if(prox === botao2) return;
    else limpar();
});

botao2.addEventListener("blur", () => {
    limpar();
});

/* -- segredo -- */

let segredo = document.getElementById("segredo");
let livro = document.getElementById("livro");
let valor = 0;

livro.addEventListener("click", () => {
    valor++;
    if(valor == 10) {
        if(pVez_segredo) {
            pts++;
            localStorage.setItem("pts", pts);
            pVez_segredo = false;
            localStorage.setItem("pVez_segredo", false);
            segredo.textContent = `Opa! Você achou um segredo... E ganhou 1 ponto! Pontuação atual: ${pts} / 3`;
        } else {
            segredo.textContent = `Você já achou esse segredo... Pontuação atual: ${pts} / 3`;
        }
    } else if(valor == 11) {
        segredo.textContent = `Apenas um livro sobre galinhas...`;
        valor = 0;
    }
});