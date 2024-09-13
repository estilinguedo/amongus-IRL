cargosGerais = ["Papai Noel", "GRITAS", "Médico", "Capitão", "Fofokero", "Médium", "DRIP", "Polícia", "Golpista", "Telepata", "Fantasma", "Juiz", "M.E.I.R.O.", "Bruxa", "Sacana", "Vovó", "Cupido", "Detetive"];
cargosPossiveis = [];

quantidadeImpostores = 0;
quantidadePessoas = 0;
    
pessoas = [];
impostores = []

function main(){
    perguntaPessoas();
    
    for (i = 0; i < quantidadePessoas; i++){
        pessoas.push(sorteiaCargo());
    }

    while (impostores.length < quantidadeImpostores){
        n = randInt(pessoas.length);
        if (!impostores.includes(n)){
            impostores.push(n);
        }   
    }

    for (j = 0; j < pessoas.length; j++){
        jogador = document.createElement("p");
        jogador.innerText = "O jogador " + (j + 1) + ((impostores.includes(j))? " é um impostor" : " não é um impostor") + " e ficou com o cargo: " + pessoas[j];
        document.body.appendChild(jogador);
    }
}

function randInt(numeroBrabo){
    return Math.floor(Math.random() * numeroBrabo);
}

function perguntaPessoas(){
    quantidadePessoas = parseInt(window.prompt("Quantas pessoas serão?"));
    quantidadeImpostores = parseInt(window.prompt("Dessas pessoas, quantas serão impostores?"));
}

function sorteiaCargo(){
    if (cargosPossiveis.length == 0){
        cargosPossiveis = cargosGerais;
    }
    cargoSorteado = cargosPossiveis[randInt(cargosPossiveis.length)];
    cargosPossiveis = cargosPossiveis.filter((cargo) => cargo != cargoSorteado);
    return cargoSorteado;
}