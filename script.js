let count = 0;
let countEl = document.getElementById('count-el');
function increment() {
    count++;
    countEl.textContent = count;
}
function saveEl() {
    let save = document.getElementById('entries');
    save.textContent += count + ' - ';
    count = 0;
    countEl.textContent = count;
}