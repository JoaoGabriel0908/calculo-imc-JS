'use strict'

// Função criada para o range
const iniciarRange = (idRange) => {
    const range = document.getElementById(idRange)
    const span =  document.getElementById(`valor-${idRange}`)

    // Criando uma variavel que faz a função de atualizar o valor do range do span
    const atualizarValor = () => span.textContent = range.value

    // Quando o botão é selecionado a função é criada, junto a isso
    // as variaveis também são criadas.
    range.addEventListener('input', atualizarValor)
}
// Exportando funções
export{
    iniciarRange
}