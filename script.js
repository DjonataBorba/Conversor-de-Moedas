const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const selectMoeda = document.querySelector(".select-moeda")

// Taxas fixas de conversão tendo o Real (BRL) como base de cálculo interna
const taxasEmReais = {
    real: 1.0,
    dolar: 5.73,
    euro: 6.20,
    libra: 7.68,
    bitcoin: 489625.63
}

function convertValues() {
    const inputValue = parseFloat(document.querySelector(".input-currency").value)
    if (isNaN(inputValue) || inputValue <= 0) return;

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const moedaOrigem = selectMoeda.value
    const moedaDestino = currencySelect.value

    // Converte o valor digitado primeiro para Real, depois para a moeda de destino
    const valorEmReais = inputValue * taxasEmReais[moedaOrigem]
    const valorFinal = valorEmReais / taxasEmReais[moedaDestino]

    // Formata a moeda de Origem
    if (moedaOrigem === "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue)
    } else if (moedaOrigem === "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputValue)
    } else if (moedaOrigem === "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputValue)
    }

    // Formata a moeda de Destino
    if (moedaDestino === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valorFinal)
    } else if (moedaDestino === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valorFinal)
    } else if (moedaDestino === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(valorFinal)
    } else if (moedaDestino === "bitcoin") {
        currencyValueConverted.innerHTML = "₿ " + valorFinal.toFixed(8)
    }
}

function atualizarInterface() {
    const nomeMoedaOrigem = document.getElementById("nome-moeda")
    const iconOrigem = document.getElementById("icon-origem")
    
    const nomeMoedaDestino = document.getElementById("currency-name")
    const iconDestino = document.getElementById("icon-destino")

    // Mapeamento de nomes e emojis
    const dadosMoedas = {
        real: { nome: "Real Brasileiro", icon: "🇧🇷" },
        dolar: { nome: "Dólar Americano", icon: "🇺🇸" },
        euro: { nome: "Euro", icon: "🇪🇺" },
        libra: { nome: "Libra", icon: "🇬🇧" },
        bitcoin: { nome: "Bitcoin", icon: "₿" }
    }

    // Atualiza Origem
    nomeMoedaOrigem.innerHTML = dadosMoedas[selectMoeda.value].nome
    iconOrigem.innerHTML = dadosMoedas[selectMoeda.value].icon

    // Atualiza Destino
    nomeMoedaDestino.innerHTML = dadosMoedas[currencySelect.value].nome
    iconDestino.innerHTML = dadosMoedas[currencySelect.value].icon

    convertValues()
}

selectMoeda.addEventListener("change", atualizarInterface)
currencySelect.addEventListener("change", atualizarInterface)
convertButton.addEventListener("click", convertValues)
