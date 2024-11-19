// const green = document.querySelector('#green');
// const red = document.querySelector('#red');
// const blue = document.querySelector('#blue');
// const texte = document.querySelector('#text');

// green.addEventListener('click' , handleAddGreen);
// red.addEventListener('click' , handleAddGreen);
// blue.addEventListener('click' , handleAddGreen);








const colorButtons = document.querySelectorAll('.color');
const textElement = document.querySelector('#text');


colorButtons.forEach(function(button) {
    button.addEventListener('click', function() {

        const color = this.classList[1]; 

        textElement.style.color = color;
    });
});