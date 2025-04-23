const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const selectMoeda = document.querySelector(".select-moeda")

function convertValues(){
       const inputCurrencyValue = document.querySelector(".input-currency").value
       const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
       const currencyValueConverted = document.querySelector(".currency-value")

       const libraToday = 7.68
       const dolarToday = 5.73
       const euroToday = 6.2
       const bitcoinToday = 489625.63

       if (currencySelect.value == "dolar") {
              currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",
                     { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToday)
       }
       if (currencySelect.value == "euro") {
              currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                     style: "currency", currency: "EUR"
              }).format(inputCurrencyValue / euroToday)
       }

       if (currencySelect.value == "libra") {
              currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GP",
                     { style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToday)
       }

       if (currencySelect.value == "bitcoin") {
              currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",
                     {minimumFractionDigits: 8,maximumFractionDigits: 8}).format(inputCurrencyValue / bitcoinToday)
       }
       
       
       currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
              style: "currency", currency: "BRL"
       }).format(inputCurrencyValue)

}

function changeCurrency() {
       const currencyName = document.getElementById("currency-name")
       const currencyImage = document.querySelector(".currency-img")

       if (currencySelect.value == "dolar") {
              currencyName.innerHTML = "Dólar Americano"
              currencyImage.src = "./assets/Dólar.png"
       }


       if (currencySelect.value == "euro") {
              currencyName.innerHTML = "Euro"
              currencyImage.src = "./assets/Euro.png"
       }

       if (currencySelect.value == "libra") {
              currencyName.innerHTML = "Libra"
              currencyImage.src = "./assets/libra1.png"
       }

       if (currencySelect.value == "bitcoin") {
              currencyName.innerHTML = "Bitcoin"
              currencyImage.src = "./assets/bitcoin1.png"
       }


       convertValues()
}

function moedaVolumes() {
       const inputCurrencyValue = document.querySelector(".input-currency").value
       const currencyValueToConvert = document.getElementById("currencyValueToConvert")
       const currencyValueConverted = document.getElementById("currency-value")

       const libraToday = 7.68
       const dolarToday = 5.73
       const euroToday = 6.2

       if (selectMoeda.value == "dolar") {
              currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",
                     { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToday)
       }
       if (selectMoeda.value == "euro") {
              currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                     style: "currency", currency: "EUR"
              }).format(inputCurrencyValue / euroToday)
       }

       if (selectMoeda.value == "libra") {
              currencyValueConverted.innerHTML = new Intl.NumberFormat("esterlina",
                     { style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToday)
       }
}

function procuraMoeda() {

       const nomeMoeda = document.getElementById("nome-moeda")
       const currencyImage = document.querySelector(".currency-image")

       if (selectMoeda.value == "dolar") {
              nomeMoeda.innerHTML = "Dólar Americano"
              currencyImage.src = "./assets/Dólar.png"
       }


       if (selectMoeda.value == "euro") {
              nomeMoeda.innerHTML = "Euro"
              currencyImage.src = "./assets/Euro.png"
       }

       if (selectMoeda.value == "real") {
              nomeMoeda.innerHTML = "Real Brasileiro"
              currencyImage.src = "./assets/Real.png"
       }


       moedaValumes()
}


selectMoeda.addEventListener("change", procuraMoeda)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)