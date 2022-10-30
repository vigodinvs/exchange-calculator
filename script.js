
//variables
let currencyElementOne = document.getElementById('currency-one')
let currencyElementTwo = document.getElementById('currency-two')
let amountElementOne = document.getElementById('amount-one')
let amountElementTwo = document.getElementById('amount-two')
let rateElement = document.getElementById('rate')
let swapButton = document.getElementById('swap')

//Eventlisteners
currencyElementOne.addEventListener('change', calculate)
amountElementOne.addEventListener('input', calculate)
currencyElementTwo.addEventListener('change', calculate)
amountElementTwo.addEventListener('input', calculate)
swapButton.addEventListener('click', () => {
    let temporaryVariable = currencyElementOne.value
    currencyElementOne.value = currencyElementTwo.value
    currencyElementTwo.value = temporaryVariable
    calculate()
})

//fetch exchange rates and updates the DOM
function calculate() {
    let currencyOne = currencyElementOne.value
    let currencyTwo = currencyElementTwo.value
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(res => res.json())
        .then(data => {
            let rate = data.rates[currencyTwo]
            rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`
            amountElementTwo.value = (amountElementOne.value * rate).toFixed(2)
        })

}

calculate()