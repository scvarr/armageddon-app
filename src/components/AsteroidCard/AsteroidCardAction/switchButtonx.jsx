let addButton = document.getElementById('addB')
let delButton = document.getElementById('delB')
addButton.addEventListener('click', function () {
    addButton.disabled = true
    delButton.disabled = false
})

delButton.addEventListener('click', () => {
    delButton.disabled = true
    addButton.disabled = false
})
