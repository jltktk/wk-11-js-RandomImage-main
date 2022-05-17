const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage(){
    
    //teiekoodsiin
    let randomIndex = Math.floor(Math.random()* images.length);
    console.log(randomIndex)
    image.src = "images/" + "pic" + [randomIndex + 1] + ".jpg";
}