const image1 = document.querySelector('#image1');



image1.addEventListener('mouseover' , handleMouseover);
image1.addEventListener('mouseleave' , handleMouseleave);

function handleMouseover(){
image1.style.border = "3px solid red"
};

function handleMouseleave(){
    image1.style.border = '';
};