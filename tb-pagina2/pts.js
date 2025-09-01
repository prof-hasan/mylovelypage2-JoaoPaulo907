const max = 50;

/* inicialização */

function Bool(chave) {
    return localStorage.getItem(chave) === "true";
}

if(localStorage.getItem("pVez_segredo") === null)
    localStorage.setItem("pVez_segredo", true);
let pVez_segredo = Bool("pVez_segredo");

let pts = parseInt(localStorage.getItem("pts"));

const pts_atual = document.getElementById("pts-atual");
const vitoriaEl = document.getElementById("vitoria");
const confirmarEl = document.getElementById("confirmar");

atualizar();

/* funções */

function atualizar() {
    pts_atual.textContent = `Pontuação atual: ${pts} / ${max}`;
    if(pts === max) vitoria();
}

let flag = true;
function confirmar() {
    if(flag) {
        confirmarEl.style.visibility = "visible";
        confirmarEl.style.opacity = 1;
        confirmarEl.style.transition = "all 100ms ease";
        flag = !flag;
    } else {
        confirmarEl.style.visibility = "hidden";
        confirmarEl.style.opacity = 0;
        confirmarEl.style.transition = "all 100ms ease";
        flag = !flag;
    }
}

function limpar_pts() {
    localStorage.setItem("pts", 0);
    pts = 0;

    localStorage.setItem("pVez_p1", true);
    pVez_p1 = true;

    localStorage.setItem("pVez_p2", true);
    pVez_p2 = true;

    localStorage.setItem("pVez_p3", true);
    pVez_p3 = true;

    localStorage.setItem("pVez_segredo", true);
    pVez_segredo = true;

    localStorage.setItem("pVez_tempo", true);
    pVez_tempo = true;

    pts_atual.textContent = `Pontuação atual: ${pts} / ${max}`;

    confirmar();
    esconder();
}

function vitoria() {
    vitoriaEl.style.visibility = "visible";
}

function esconder() {
    vitoriaEl.style.visibility = "hidden";
}

let flagVit = true;
const trocar_cor = setInterval(() => {
    vitoriaEl.style.color = flagVit ? "gold" : "orange";
    vitoriaEl.style.textShadow = flagVit ? "2px 2px orange" : "2px 2px orangered";
    flagVit = !flagVit;
}, 500);

/* -- segredo -- */

const segredo = document.getElementById("segredo");
const livro = document.getElementById("livro");
let valor = 0;

livro.addEventListener("click", () => {
    valor++;
    if(valor == 10) {
        if(pVez_segredo) {
            pts += 5;
            localStorage.setItem("pts", pts);
            pVez_segredo = false;
            localStorage.setItem("pVez_segredo", false);
            segredo.textContent = `Opa! Você achou um segredo... E ganhou 5 pontos! Pontuação atual: ${pts} / ${max}`;
            atualizar();
        } else {
            segredo.textContent = `Você já achou esse segredo... Pontuação atual: ${pts} / ${max}`;
        }
    } else if(valor == 11) {
        segredo.textContent = `Apenas um livro sobre galinhas...`;
        valor = 0;
    }
});