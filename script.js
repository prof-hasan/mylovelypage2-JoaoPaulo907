const max = 50;

/* local storage */

function Bool(chave) {
    return localStorage.getItem(chave) === "true";
}

if(localStorage.getItem("pts") === null)
    localStorage.setItem("pts", 0);
let pts = parseInt(localStorage.getItem("pts"));

if(localStorage.getItem("pVez_p1") === null)
    localStorage.setItem("pVez_p1", true);
let pVez_p1 = Bool("pVez_p1");

if(localStorage.getItem("pVez_p2") === null)
    localStorage.setItem("pVez_p2", true);
let pVez_p2 = Bool("pVez_p2");

if(localStorage.getItem("pVez_p3") === null)
    localStorage.setItem("pVez_p3", true);
let pVez_p3 = Bool("pVez_p3");

if(localStorage.getItem("pVez_tempo") === null)
    localStorage.setItem("pVez_tempo", true);
let pVez_tempo = Bool("pVez_tempo");

/* elementos */

const resp1 = document.getElementById("resp1");
const resp2 = document.getElementById("resp2");
const resp3 = document.getElementById("resp3");

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");

/* funções */

function verif1() {
    if(input1.value == "") {
        resp1.textContent = `Responda alguma coisa!`;
        resp1.style.visibility = "visible";
    } else if(input1.value == "Outono" || input1.value == "outono") {
        if(pVez_p1) {
            acerto1();
            resp1.innerHTML = `Parabéns! você acertou!<br>Pontuação atual: ${pts} / ${max}`;
            resp1.style.visibility = "visible";
        } else {
            resp1.innerHTML = `Você já acertou essa pergunta...<br>Pontuação atual: ${pts} / ${max}`;
            resp1.style.visibility = "visible"
        }
    } else {
        resp1.textContent = `Você errou...`;
        resp1.style.visibility = "visible";
    }
}

function verif2() {
    if(input2.value == "") {
        resp2.textContent = `Responda alguma coisa!`;
        resp2.style.visibility = "visible";
    } else if(input2.value == "Penny" || input2.value == "penny") {
        if(pVez_p2) {
            acerto2();
            resp2.innerHTML = `Parabéns! você acertou!<br>Pontuação atual: ${pts} / ${max}`;
            resp2.style.visibility = "visible";
        } else {
            resp2.innerHTML = `Você já acertou essa pergunta...<br>Pontuação atual: ${pts} / ${max}`;
            resp2.style.visibility = "visible";
        }
    } else {
        resp2.textContent = `Você errou...`;
        resp2.style.visibility = "visible";
    }
}

function verif3() {
    if(input3.value == "") {
        resp3.textContent = `Responda alguma coisa!`;
        resp3.style.visibility = "visible";
    } else if(input3.value == "Dourado" || input3.value == "dourado") {
        if(pVez_p3) {
            acerto3();
            resp3.innerHTML = `Parabéns! você acertou!<br>Pontuação atual: ${pts} / ${max}`;
            resp3.style.visibility = "visible";
        } else {
            resp3.innerHTML = `Você já acertou essa pergunta...<br>Pontuação atual: ${pts} / ${max}`;
            resp3.style.visibility = "visible";
        }
    } else {
        resp3.textContent = `Você errou...`;
        resp3.style.visibility = "visible";
    }
}

function acerto1() {
    pts += 10;
    localStorage.setItem("pts", pts);
    pVez_p1 = false;
    localStorage.setItem("pVez_p1", false);
}

function acerto2() {
    pts += 10;
    localStorage.setItem("pts", pts);
    pVez_p2 = false;
    localStorage.setItem("pVez_p2", false);
}

function acerto3() {
    pts += 15;
    localStorage.setItem("pts", pts);
    pVez_p3 = false;
    localStorage.setItem("pVez_p3", false);
}

function limpar() {
    resp1.textContent = ``;
    resp1.style.visibility = "hidden";

    resp2.textContent = ``;
    resp2.style.visibility = "hidden";

    resp3.textContent = `.`;
    resp3.style.visibility = "hidden";

    input1.value = ``;
    input2.value = ``;
    input3.value = ``;
}

/* input */

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

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

input3.addEventListener("keydown", e => {
    if(e.key === 'Enter') verif3();
});

input3.addEventListener("focusout", e => {
    const prox = e.relatedTarget;
    if(prox === botao3) return;
    else limpar();
});

botao3.addEventListener("blur", () => {
    limpar();
});

/* -- segredo -- */

let tempo = 0;
setInterval(() => {
    tempo++;
    if(tempo === 300) {
        if(pVez_tempo) {
            pts += 10;
            localStorage.setItem("pts", pts);
            pVez_tempo = false;
            localStorage.setItem("pVez_tempo", false);
            alert(`Você ficou 5 minutos lendo essas incríveis curiosidades... Por isso, recebeu 10 pontos! Pontuação atual: ${pts} / ${max}`);
        } else {
            alert(`Você ficou 5 minutos lendo essas incríveis curiosidades... Mas já recebeu seus pontos. Pontuação atual: ${pts} / ${max}`);
        }
    }
}, 1000);