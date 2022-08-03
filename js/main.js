'use strict'

window.addEventListener('load', function() {

    // Botão e variáveis

    var button = document.querySelector("#button"),
        result = document.querySelector(".result");

    // Evento do botão para calcular IMC

    button.addEventListener("click", function(e) {
        e.preventDefault()

        // Input variaveis

        var peso = parseInt(document.querySelector("#peso").value),
            altura = parseInt(document.querySelector("#altura").value);

        // Calcular o IMC se os campos estiverem preenchidos com números with numbers

        if (!isNaN(peso) && !isNaN(altura)) {

            const IMC = ((peso / Math.pow(altura, 2)) * 10000).toFixed(2);
            console.log(peso);

            // Mostrar Resultado

            result.innerHTML = `
            <p>Seu IMC é: ${IMC}</p>
            `
        } else {
            result.innerHTML = `
            <p>Insira todos os dados para calcular o IMC</p>
            `
        }

    });
});