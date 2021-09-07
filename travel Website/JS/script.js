// Dark_mood
let moon_logo = document.querySelectorAll(".header_top span img");
let dark_efect = document.getElementsByClassName('night_mood_efect') ;
for (let i = 0; i < moon_logo.length ; i++) {
    moon_logo[i].addEventListener('click' , function (){
            moon_logo[0].classList.toggle('d_none');
            moon_logo[1].classList.toggle('d_none');
            if(i=== 0){
                document.body.style.backgroundColor='#162527';
                for (let j = 0; j < dark_efect.length ; j++) {
                    dark_efect[j].style.color = '#fff';
                }
            }
            else {
                document.body.style.backgroundColor='#fff';
                for (let j = 0; j < dark_efect.length ; j++) {
                    dark_efect[j].style.color = '#1f3639';
                }
            }
    })
}

// pause_video

let btn = document.querySelector(".section_4_btn");
let video = document.querySelector('.section_4_video');
btn.addEventListener('click',function (){
    btn.children[0].classList.toggle('opacity_0');
    btn.children[1].classList.toggle('opacity_0');
    if ( btn.children[0].classList.contains('opacity_0')){
        video.pause();
    }
    else {
        video.play();
    }
})