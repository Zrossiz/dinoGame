const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event) {
    jump()
});

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    }
    setTimeout( function() {
        dino.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval( function() {
    //Разбиваем строковый элемент и возвращаем число
    //Возвращаем объект, содержащий значение всех css свойств
    //Получаем его значение
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));  

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Game over')
    }
}, 10)