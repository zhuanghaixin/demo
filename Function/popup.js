var choice = document.querySelector('.choice')
var btn = document.querySelector('.btn')
var card = document.querySelector('.card')
var items = document.querySelectorAll('.card li')

btn.onclick = function(e) {
    card.style.display = "block"
    e.stopPropagation()
}

items.forEach(item => {
    item.onclick = function(e) {
        choice.innerText = this.innerText
        e.stopPropagation()
    }
})

document.onclick = function() {
    card.style.display = "none"
}

