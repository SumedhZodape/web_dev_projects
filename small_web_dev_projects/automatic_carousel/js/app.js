
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
    // if setInterval is working and someone click the next button that time setInterval will be reset
    resetInterval();

}


// automatic slide
let move = setInterval(() => {
    next();
}, 3000);


// function for reset interval
function resetInterval(){
    clearInterval(move);
    move = setInterval(() => {
        next();
    }, 3000);
    // call function in next function and prev function
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

    // if setInterval is working and someone click the next button that time setInterval will be reset
    resetInterval();
}




function openSlider(slideNo){
    // let marginLeft=(slideNo-1)*100;
    let marginLeft=(slideNo)*100;
    document.getElementById("slider").style.marginLeft=-marginLeft+"%";

    // user can not click fast
    document.getElementById("next").classList.add("disabled");
    document.getElementById("prev").classList.add("disabled");

        // changing the indicator color
    // if it is a html collection you can not use foreachb
    let indicators = document.getElementsByClassName("indicator");
    for (let i=0; i<indicators.length; i++){
        indicators[i].classList.remove("disable")
    }

    setTimeout(()=>{
        document.getElementById("next").classList.remove("disabled");
        document.getElementById("prev").classList.remove("disabled");
        for (let i=0; i<indicators.length; i++){
            indicators[i].classList.remove("disable")
        }
    },700)

    
        // changing the indicator color
    // if it is a html collection you can not use foreachb
    for (let i=0; i<indicators.length; i++){
        if((i+1)===slideNo){
            indicators[i].classList.add("activeindicator");
        }
        else{
            indicators[i].classList.remove("activeindicator")
        }
    }

}












// function for indicators

function indicate(slideNo){
    if(slideNo>=1 && slideNo<=4){
        currentSlide=slideNo;
        document.getElementById("slider").style.transition=".7s";
        openSlider(slideNo);
        // if setInterval is working and someone click the next button that time setInterval will be reset
        resetInterval();
    }


}




