let pts = localStorage.getItem("pts");
let pts_atual = document.getElementById("pts-atual");
let vitoriaEl = document.getElementById("vitoria");

pts_atual.textContent = `Pontuação atual: ${pts} / 3`;
if(pts == 3) vitoria();

let flag = true;
function confirmar() {
    if(flag) {
        document.getElementById("confirmar").style.visibility = "visible";
        document.getElementById("confirmar").style.opacity = 1;
        document.getElementById("confirmar").style.transition = "all 100ms ease";
        flag = !flag;
    } else {
        document.getElementById("confirmar").style.visibility = "hidden";
        document.getElementById("confirmar").style.opacity = 0;
        document.getElementById("confirmar").style.transition = "all 100ms ease";
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

    localStorage.setItem("pVez_segredo", true);
    pVez_segredo = true;

    pts_atual.textContent = `Pontuação atual: ${pts} / 3`;

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
    flagVit = !flagVit;
}, 500);