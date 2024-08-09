let dt = document.getElementById('time');
let dd = document.getElementById('day');
let bg = document.getElementsByTagName('body');
let date;
let time;
let day;
let image = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
]
let i=0;
setInterval(() => {
    i=parseInt(Math.random()*4);
    bg[0].style.backgroundImage = "url(images/"+image[i]+")"; 
}, 5000);

function addZero(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

setInterval(() => {
    date = new Date();
    time = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
    day = date.toLocaleDateString();
    dt.innerHTML = time;
    dd.innerHTML = day;
}, 1000);