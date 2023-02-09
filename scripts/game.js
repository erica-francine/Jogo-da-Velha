
let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbol = ["o", "x"];
let ganhador = false;
let venc = "winner";
let results = document.getElementsByClassName(venc)[0];

function events(array) {

    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener('click', (event) => {
            let position = (event.target.id)

            if (ganhador == false) {
                move(position)
                setTimeout(() => {
                    winner();
                }, 100);
            };

        })
    }

}


function move(posicao) {
    let square = document.getElementById(`${posicao}`);

    if (tabuleiro[posicao] == "" && playerTime == 0) {
        tabuleiro[posicao] = symbol[playerTime];
        square.classList.add(symbol[playerTime]);
        playerTime = 1;


    } else if (tabuleiro[posicao] == "" && playerTime == 1) {

        tabuleiro[posicao] = symbol[playerTime];
        square.classList.add(symbol[playerTime]);
        playerTime = 0;

    }

}

function winner() {
    if (tabuleiro[0] != "" && tabuleiro[0] == tabuleiro[1] && tabuleiro[0] == tabuleiro[2]) {
        results.innerHTML = `O jogador ${tabuleiro[0].toUpperCase()} é o vencedor!`
        ganhador = true;

    } else if (tabuleiro[3] != "" && tabuleiro[3] == tabuleiro[4] && tabuleiro[3] == tabuleiro[5]) {
        results.innerHTML = `O jogador ${tabuleiro[3].toUpperCase()} é o vencedor!`
        ganhador = true;
    } else if (tabuleiro[6] != "" && tabuleiro[6] == tabuleiro[7] && tabuleiro[6] == tabuleiro[8]) {
        results.innerHTML = `O jogador ${tabuleiro[6].toUpperCase()} é o vencedor!`
        ganhador = true;
    } else if (tabuleiro[0] != "" && tabuleiro[0] == tabuleiro[4] && tabuleiro[0] == tabuleiro[8]) {
        results.innerHTML = `O jogador ${tabuleiro[0].toUpperCase()} é o vencedor!`
        ganhador = true;
    } else if (tabuleiro[2] != "" && tabuleiro[2] == tabuleiro[4] && tabuleiro[2] == tabuleiro[6]) {
        results.innerHTML = `O jogador ${tabuleiro[2].toUpperCase()} é o vencedor!`
        ganhador = true;
    } else if (tabuleiro[0] != "" && tabuleiro[0] == tabuleiro[3] && tabuleiro[0] == tabuleiro[6]) {
        results.innerHTML = `O jogador ${tabuleiro[0].toUpperCase()} é o vencedor!`
        ganhador = true;
    } else if (tabuleiro[2] != "" && tabuleiro[2] == tabuleiro[5] && tabuleiro[2] == tabuleiro[8]) {
        results.innerHTML = `O jogador ${tabuleiro[2].toUpperCase()} é o vencedor!`
        ganhador = true;

    } else if (tabuleiro[1] != "" && tabuleiro[1] == tabuleiro[4] && tabuleiro[1] == tabuleiro[7]) {
        results.innerHTML = `O jogador ${tabuleiro[1].toUpperCase()} é o vencedor!`
        ganhador = true;
    }
}

function reiniciar(array) {
    ganhador = false;
    playerTime = 0;
    for (let i = 0; i < array.length; i++) {
        let square = document.getElementById(`${i}`)
        tabuleiro[i] = "";
        results.innerHTML = "";
        if (square.classList.contains("o")) {
            square.classList.remove("o")
        } else if (square.classList.contains("x")) {
            square.classList.remove("x")
        }
    };

    events(array);
}