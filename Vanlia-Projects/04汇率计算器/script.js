// function fetchData() {
//     fetch('item.json').then((res) => {
//             return res.json();
//         }
//     ).then((myJson) => {
//         console.log(myJson);
//         document.body.innerHTML = myJson[0].text
//     });
// }
//
// fetchData()


const currencyOne=document.getElementById('currency-one')
const amountOne=document.getElementById('amount-one')
const currencyTwo=document.getElementById('currency-two')
const amountTwo=document.getElementById('amount-two')
const swap = document.getElementById("swap");
const rateEl = document.getElementById("rate");

//事件监听
currencyOne.addEventListener('change',calculate)
amountOne.addEventListener('input',calculate)
currencyTwo.addEventListener('change',calculate)
amountTwo.addEventListener('input',calculate)

function calculate() {
    const currency_one=currencyOne.value
    const currency_two=currencyTwo.value
    console.log(currency_one)
    console.log(currency_two)
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const rate = data.rates[currency_two];

            rateEl.innerText = `1${currency_one} = ${rate}${currency_two}`;
            amountTwo.value = (amountOne.value * rate).toFixed(2);
        });
}

calculate()
