let count = 0;
function increment() {
    count++;
    document.getElementById('count-el').innerText = count;
}
function saveEl() {
    let save = document.getElementById('entries');
    save.textContent += count + ' - ';
}