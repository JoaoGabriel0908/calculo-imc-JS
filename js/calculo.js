'use strict';

import {iniciarRange} from "./Range.js";

// Verificando se está vazio ou não com Validação
// function camposValidos() {
//     return document.getElementById('formulario').reportValidity();
// }

// Verificando se está vazio ou não com Validação
// Com a function arrow
const camposValidos = () => document.getElementById('formulario').reportValidity();

// Calculando IMC com a função arrow Function
const calcularImc = (altura, peso) => peso/ (altura*altura);

// Função para calcular o IMC
// function calcularImc(altura,peso) {
//     return peso / (altura*altura);
// }

const classificarImc = (imc) => {
    let texto;
    if(imc < 18.5) {
        texto = "e voçê está abaixo do peso"
    } else if(imc < 25) {
        texto = "e voçê está com peso ideal. <span id='parabens'>Parabéns!</span>";
    } else if(imc < 30) { 
        texto = "e voçê está levemente acima do peso."
    } else if (imc < 35) {
        texto = "e voçê está com obesidade grau I"
    } else if (imc < 40) {
        texto = "e voçê está com obesidade grau II"
    } else {
        texto = "e voçê está com obesidade grau III. <span id='cuidado'>Cuidado!</span>";
    }
    return texto;
}
// Função mostrar o resultado
function mostrarResultado(){ 

    // Criando variaveis
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
 
    // Testar o código:
    // console.log

    // Comando de decisão para ver o seu peso e valor do IMC
    if(camposValidos()){

        // Fazendo a conta do imc
        const imc = calcularImc(altura,peso)
        let texto = classificarImc(imc)

    resultado.innerHTML = `${nome} seu IMC é ${imc.toFixed(2)} ${texto}`;
} else {
    resultado.innerHTML = "Preencha todos os campos!!!"
}
}
document.getElementById('calcular').addEventListener('click', mostrarResultado);

iniciarRange('altura')
iniciarRange('peso')
