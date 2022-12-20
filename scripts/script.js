

let inputMulheres = document.getElementById("mulheres");
let inputHomens = document.getElementById("homens")
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular(){
    console.log("Calculando...")

    let mulheres = inputMulheres.value;
    let homens = inputHomens.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * homens + ((carnePP(duracao)/4 * 3) * mulheres) + (carnePP(duracao)/2 * criancas);
    
    let qtdTotalGuarnicao = guarnicaoPP(duracao) * homens + ((guarnicaoPP(duracao)/4 * 3) * mulheres ) + (guarnicaoPP(duracao)/2 * criancas);  

    let qtdTotalCerveja = cervejaPP(duracao) * homens + cervejaPP(duracao) * mulheres;
    
    let qtdTotalBebida = bebidaPP(duracao) * homens + bebidaPP(duracao) * mulheres + (bebidaPP(duracao)/2 * criancas);

    let p = document.getElementsByTagName("p");
        

    resultado.innerHTML = `<p>${qtdTotalCarne/1000}Kg de Carne</p>`;
    resultado.innerHTML += `<p>${(qtdTotalGuarnicao)/1000} Kg de Guarnição`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de 355ml de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida / 2000)} Garrafas Pet de 2 Litros de Água/Refrigerante</p>`;
    
    
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
    return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
    return 1200;
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
    return 1000;
    }
}

function guarnicaoPP(duracao){
    if(duracao >= 6){
        return 300;
    }else{
    return 200;
    }
}
