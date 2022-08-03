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
        var faixa = 'Peso Normal';

        // Calcular o IMC se os campos estiverem preenchidos com números with numbers

        if (!isNaN(peso) && !isNaN(altura)) {

            const IMC = ((peso / Math.pow(altura, 2)) * 10000).toFixed(2);

            console.log(peso);

            if (IMC >= 16 & IMC < 16.99) {
                faixa = ('Muito abaixo do peso');
            } else if (IMC >= 17 & IMC < 18.49) {
                faixa = ('Abaixo do peso');
            } else if (IMC >= 18.5 & IMC < 24.99) {
                faixa = ('Peso normal');
            } else if (IMC >= 25 & IMC < 29.99) {
                faixa = ('Acima do Peso');
            } else if (IMC >= 30 & IMC < 34.99) {
                faixa = ('Obesidade Grau I');
            } else if (IMC >= 35 & IMC < 40) {
                faixa = ('Obesidade Grau II');
            } else if (IMC > 40) {
                faixa = ('Obesidade Grau III');
            } else {
                faixa = ('Faixa Inválida');
            }


            // Mostrar Resultado

            result.innerHTML = `
            <p><strong>Seu IMC é: ${IMC} e sua faixa é: ${faixa}</strong></p>
            `
        } else {
            result.innerHTML = `
            <p>Insira todos os dados para calcular o IMC</p>
            `
        }

    });
});