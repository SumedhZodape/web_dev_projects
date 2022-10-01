let currentSlide=1;


function next(){
    document.getElementById("slider").style.transition=".7s";
    currentSlide++;
    openSlider(currentSlide);

    if(currentSlide>4){

        setTimeout(() => {
            document.getElementById("slider").style.transition="0s";
            currentSlide=1;
            openSlider(currentSlide);
        }, 700);
    }
}


function prev(){
    document.getElementById("slider").style.transition=".7s";
    currentSlide--;
    openSlider(currentSlide);

    if(currentSlide<1){

        setTimeout(() => {
            document.getElementById("slider").style.transition="0s";
            currentSlide=4;
            openSlider(currentSlide);
        }, 700);
    }
}




function openSlider(slideNo){
    // let marginLeft=(slideNo-1)*100;
    let marginLeft=(slideNo)*100;
    document.getElementById("slider").style.marginLeft=-marginLeft+"%";
}
