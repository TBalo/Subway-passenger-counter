let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
var entry = document.getElementById("entries");

function increment() {
    count += 1;
    countEl.innerHTML = count;
}

function save() {
    entry.innerHTML = count;
    countEl.innerHTML = 0;
    count = 0;
}

function reset(){
    window.location.reload();
}

