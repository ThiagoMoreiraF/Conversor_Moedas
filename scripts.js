/* cria uma variavel constante que pega o botao*/

const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

/*cria uma função, trecho de codigo que quando dispadado
faz algo*/

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    /*define algumas variaveis manualmente do que
    é dolar e o que é euro*/

    const dolarToday = 5.2;
    const euroToday = 6.2;

    /*cria condicionais com a formatação
    para as moedas*/

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML =  new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML =  new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday);
    }
    
    /*cria condicionais com a formatação
    para o real, esse trecho vai mostrar o valor
    que foi digitado na moeda real*/

    currencyValueToConvert.innerHTML =  new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
    
}

/* seleciona a variavel covertbutton que ta selecionando
dentro dela o botao do nosso html e adiciona um evento,
que sao comportamentos que ao clicar vai chamar a função
convertValues*/


convertButton.addEventListener("click",convertValues);