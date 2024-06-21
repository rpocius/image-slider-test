const slider = document.getElementById("slider");
const img1 = document.getElementById("hand1");
const img2 = document.getElementById("hand2");
const img3 = document.getElementById("hand3");

slider.addEventListener('input', function(){
    if (slider.value <= 100) {
        img3.style.opacity = 0;
        img2.style.opacity = slider.value / 100;    
    } else {
        img2.style.opacity = 1;
        img3.style.opacity = (slider.value - 100) / 100;
    }
});