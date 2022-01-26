'use strict';

// Verificando se está vazio ou não com Validação
function camposValidos() {
    return document.getElementById('formulario').reportValidity();
}
// Função para calcular o IMC
function calcularImc(altura,peso) {
    return peso / (altura*altura);
}
function classificarImc(imc) {
    let texto;
    if(imc < 18.5) {
        texto = "e voçê está abaixo do peso"
    } else if(imc < 25) {
        texto = "e voçê está com peso ideal. Parabéms"
    } else if(imc < 30) {
        texto = "e voçê está levemente acima do peso."
    } else if (imc < 35) {
        texto = "e voçê está com obesidade grau I"
    } else if (imc < 40) {
        texto = "e voçê está com obesidade grau II"
    } else {
        texto = "e voçê está com obesidade grau III. Cuidado"
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

    resultado.textContent = `${nome} seu IMC é ${imc.toFixed(2)} ${texto}`;
} else {
    resultado.textContent = "Preencha todos os campos!!!"
}
}
// Quando o botão é selecionado a função é criada, junto a isso
// as variaveis também são criadas.
document.getElementById('calcular').addEventListener('click', mostrarResultado)

