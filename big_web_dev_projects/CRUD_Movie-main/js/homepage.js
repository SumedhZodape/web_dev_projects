//loading of movies
let movies = [];

  // -----------------------------------------------------------------------------

    // when the page load first time check 

  if(localStorage.getItem("movies")!==null){
    //1. if there is itme called as movies in my local storage
    movies=JSON.parse(localStorage.getItem("movies"));
  }
  else{
    //2. If it is not there then created local storage 
    localStorage.setItem("movies",JSON.stringify(movies));
  }

    // -----------------------------------------------------------------------------









    // genrate html element

    function displayMovies(arr){

        document.getElementById("all_movies").innerHTML=""

        arr.forEach((movie,index)=>{

            let card = document.createElement("div");
            card.classList.add("card");

            //to generate the poster
            let img_container = document.createElement("div");
            img_container.classList.add("image-container");
            card.appendChild(img_container);
                let img = document.createElement("img");
                img.setAttribute("src", movie.posterurl);
                img_container.appendChild(img);

            let content = document.createElement("div");
            content.classList.add("movie_contents");
            card.appendChild(content);
                let heading = document.createElement("h2");
                heading.append(movie.title);
                content.appendChild(heading);

                let ratings = document.createElement("div");
                ratings.classList.add("ratings");
                content.appendChild(ratings);
                    let new_ratings = document.createElement("div");
                    new_ratings.classList.add("new_ratings");
                    ratings.appendChild(new_ratings);

                        //to generate white stars   
                        let white_ratings = document.createElement("div");
                        white_ratings.classList.add("white_ratings");
                        for(let i =0; i<=4; i++){
                            var stars = document.createElement("i")
                            stars.classList.add("fa-solid");
                            stars.classList.add("fa-star")
                            white_ratings.appendChild(stars);
                            new_ratings.appendChild(white_ratings);
                        }

                        //to generate yellow stars
                        let yellow_ratings = document.createElement("div");
                        yellow_ratings.classList.add("yellow_ratings");
                        for(let i =0; i<=4; i++){
                            let stars = document.createElement("i")
                            stars.classList.add("fa-solid");
                            stars.classList.add("fa-star")
                            yellow_ratings.appendChild(stars);
                            new_ratings.appendChild(yellow_ratings);                            
                        }


                    let rate = document.createElement("p");
                        if(movie.ratings.length===0){
                            rate.append("( 0 )");
                            yellow_ratings.style.width="0px"
                        }
                        else{
                            //calling average function
                            let avgrating= avgRating(movie.ratings);
                            rate.append(`( ${avgrating} )`);
                            yellow_ratings.style.width=avgrating*20+"%";
                        }
                    
                    ratings.appendChild(rate);
            
            let para = document.createElement("p");
            para.append("Rate Now"); 
            para.onclick=function(){
                openModal();
                //direct getting element / we can also pass the id
                movieToRate=movie;
            }
            content.appendChild(para);

            let button = document.createElement("button");
            button.append("Details");
            content.appendChild(button);
                

            document.getElementById("all_movies").appendChild(card);
        })
    }


    displayMovies(movies);







    // function for rating avg array
    function avgRating(arr){
        let sum=0;
        arr.forEach((num,index)=>{
            sum+=num;
        })
        return sum/arr.length;
    }






    //global variable
    //clicking check
    let isSubmitting=false;
    let movieToRate=null;
    let rating=null;






    //select rating function
    function selectRate(event){

        if(isSubmitting==false){
            //select the rating from the user
            let selectRating = event.target.getAttribute("data-num");

            //select  class name
            let stars = document.getElementsByClassName('rate_star');

            for(let i=0; i<selectRating;i++){
                stars[i].style.color="gold"
            }    
        }

    }









    // confirm clicking 
    function confirmRating(event){
        if(isSubmitting===true){
            isSubmitting=false;
            clearUp();
        }

        isSubmitting=true;

        rating= event.target.getAttribute("data-num")
        // console.log(rating);
        //select  class name
        let stars = document.getElementsByClassName('rate_star');

        for(let i=0; i<rating;i++){
           stars[i].style.color="gold"
         }    

        
    }








    // function for hover clearup
    function clearUp(){
        if(isSubmitting===false){
            let stars = document.getElementsByClassName("rate_star");

            for(let i=0; i<5; i++){
                stars[i].style.color="#dedede"
            }
        }
    } 












    //submit rating 
    function submitRating(){

        console.log(movieToRate);
        movieToRate.ratings.push(Number(rating));
        //update the local storage
        localStorage.setItem("movies",JSON.stringify(movies));
        closeModal();
        //display again
        displayMovies(movies);
        isSubmitting=false;
        clearUp();

    }



    //open modal
    function openModal(){
        document.getElementById("modal").style.display="flex";
    }


    //close modal
    function closeModal(){
        document.getElementById("modal").style.display="none";
    }