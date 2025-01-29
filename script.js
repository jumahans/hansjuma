const slides = document.querySelectorAll('.slides .show');
let slideindex = 0;
let interval = null;

document.addEventListener('DOMContentLoaded', initializedSlides);

function initializedSlides(){
    if(slides.length > 0){
        slides[slideindex].classList.add('displayslides');
    }
}

function showSlides(index){

    if(index >= slides.length){
        slideindex = 0;
    }

    else if(index < slides.length){
        slideindex = slides.length - 1;

    }

    slides.forEach(slide  => { 
        slide.classList.remove('displayslides');
    });

    slides[slideindex].classList.add('displayslides');


}


function prevSlides(){
    slideindex--;
    showSlides(slideindex);

}

function nextSlides(){
    slideindex++;
    showSlides(slideindex);
}

const show = document.getElementById('show');
const navigation = document.getElementsByClassName('navigation')[0];



// window.addEventListener('resize', () =>{
//     if(window.innerWidth <= 767){
//         navigation.style.display='none';
//     }
//     else{
//         navigation.style.display='flex';
//     }
// })
// window.addEventListener('resize', () => {
//     if (window.innerWidth <= 479) {
//         navigation.style.display = 'none'; // Hide for small screens
//     } else {
//         navigation.style.display = 'flex'; // Show for larger screens
//     }
// });
show.addEventListener("click", () => {
    if (navigation.style.display === "none" || navigation.style.display === "") {
        navigation.style.display = 'flex'; 
        navigation.style.margin="2rem";
        navigation.style.backgroundColor='white';
        navigation.style.margin='0';
        navigation.style.color='black';
        navigation.style.fontSize="0.7rem";
        navigation.style.alignItems = 'flex-start';
        navigation.style.margin="2rem";
        show.innerHTML = '<i class="bx bx-x"></i>';   
            } else {
        navigation.style.display = 'none'; 
        show.innerHTML = '<i class="bx bx-menu"></i>';             
    }
});

document.addEventListener('DOMContentLoaded', () =>{
    if(window.innerWidth <= 767){
        navigation.style.display='none';
    }
    else{
        navigation.style.display='flex';
    }
});