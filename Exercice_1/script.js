const image1 = document.querySelector('#image1');



image1.addEventListener('mouseover' , handleMouseover);
image1.addEventListener('mouseleave' , handleMouseleave);

function handleMouseover(){
image1.style.border = "3px solid red"
};

function handleMouseleave(){
    image1.style.border = '';
};

// // correction : 

// // const img = document.querySelector("#image1");

// // img.addEventListener("mouseenter", handleMouseOver);

// // img.addEventListener("mouseleave", handleMouseOver);

// // function handleMouseOver(event) {
// //   const imageEvent = event.target;
// //   imageEvent.classList.toggle("border-red");
// }