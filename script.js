let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function incremant(){
    count ++
    countEL.textContent = count
}
function save(){
    saveEl.textContent += count +" -"
}