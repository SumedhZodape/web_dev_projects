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







// -----------------------------------------------------------------------------------
  //getting the no of pages
  let totalPages = Math.ceil(movies.length/10)
  

  let start =0;
  let end = 10;


  //serial no
  let serial= start+1;



  //preparing the first 10 data
  let paginate = movies.slice(start, end);

  document.getElementById("totalpages").innerText=totalPages;

  // ------------------------------------------------------------------------------------








  // ------------------------------------------------------------------------------------------------

  // display data function

  function displayMoviesTable(moviesArr){

    //clear old add new all 
    document.getElementById("movies").innerHTML="";

    moviesArr.forEach((movie,index)=>{

      let row = document.createElement("tr");

      let numbering = document.createElement("td");
      numbering.append(serial);
      row.appendChild(numbering);
      serial++;


      let title = document.createElement("td");
      title.append(movie.title);
      row.appendChild(title);

      let releaseDate = document.createElement("td");
      releaseDate.append(movie.releaseDate);
      row.appendChild(releaseDate);

      let genres = document.createElement("td");
      movie.genres.forEach((genre,index)=>{
        genres.append(genre+" . ");
      })
      row.appendChild(genres);


      let duration =document.createElement("td");
      duration.append(movie.duration);
      row.appendChild(duration);

      let imdbRating = document.createElement("td");
      imdbRating.append(movie.imdbRating);
      row.appendChild(imdbRating);


      // let contentRating = document.createElement("td");
      // contentRating.append(movie.contentRating);
      // row.appendChild(contentRating);

      let action = document.createElement("td");
      action.classList.add("actions");

      let view = document.createElement("i");
      view.classList.add("fa-solid");
      view.classList.add('fa-eye');
      //passing the id as a argument
      view.onclick=openViewModal.bind(this, movie.id);

      let edit = document.createElement("i");
      edit.classList.add("fa-solid");
      edit.classList.add("fa-pen-to-square");
      edit.onclick=setUpdate.bind(this, movie.id);

      let trash = document.createElement("i");
      trash.classList.add("fa-solid");
      trash.classList.add("fa-trash");
      trash.onclick=deleteMovie.bind(this, movie.id);

      action.append(view);
      action.append(edit)
      action.append(trash);
      row.appendChild(action);



      document.getElementById("movies").appendChild(row);


    })


  }


  



  // first time call page onloading

  displayMoviesTable(paginate);

  // --------------------------------------------------------------------------------------------------------













  // --------------------------------------------------------------------------------------------

  

  currentPage=1;
  
  // fonction for next page
  function nextPage(){

    if(currentPage < totalPages){
      currentPage++;
      start +=10;
      end+=10;

      serial= start+1;
  
      paginate=movies.slice(start,end);
      displayMoviesTable(paginate);

      document.getElementById("current_page").innerText=currentPage;
    }
    
  }




  // function for prev page

  function prevPage(){

    if(currentPage > 1){
      currentPage--;
      start-=10;
      end-=10

      serial= start+1;

      paginate=movies.slice(start,end);
      displayMoviesTable(paginate)
      document.getElementById("current_page").innerText=currentPage;
    }

  }





  
  //input type pagination function
  
  function openPage(pageNumber) {
    
    
    if(pageNumber!=="" && pageNumber>=1 && pageNumber<=totalPages){
      currentPage=pageNumber;
      
      start =(currentPage-1)*10;
      end=currentPage*10;

      serial= start+1;
      
      paginate=movies.slice(start,end);
      
      displayMoviesTable(paginate);
      document.getElementById("current_page").innerText=currentPage;

      // document.getElementsByTagName("a")[pageNumber-1].style.backgroundColor="red";
      
    }
    else if(pageNumber===""){

      paginate=movies.slice(0,10);

      displayMoviesTable(paginate);
      document.getElementById("current_page").innerText=currentPage;
    }

  }






  //generate link number of pages function
  function generatePageLink(){
    for(let i=1;i<=totalPages;i++){
      let link =document.createElement("a");
      link.append(i);
      link.onclick=openPage.bind(this, i);
      document.getElementById("pages").appendChild(link);
    }
  }


  generatePageLink();
  // ------------------------------------------------------------------------------------------------












  // ----------------------------------------------------------------------------------------

  //function to display given movie array
  //open modal function

  function openViewModal(movieid){


    //find movie and return array
    let movie = movies.find((movie, index)=>{
      return movie.id ===  movieid;
    })

    // using add pass the find data
    document.getElementById("title").innerHTML=movie.title;
    document.getElementById("poster").src=movie.posterurl;
    // let genres = movie.genres.map((ele,index)=>{
    //   return ele+""
    // });
    // document.getElementById("genre").innerHTML=genres;
    document.getElementById("genre").innerHTML=movie.genres;
    document.getElementById("storyline").innerHTML=movie.storyline;
    document.getElementById("actors").innerHTML=movie.actors;
    document.getElementById("releasedate").innerHTML=movie.releaseDate;
    document.getElementById("duration").innerHTML=movie.duration;
    document.getElementById("imdbrating").innerHTML=movie.imdbRating;


    // open modal
    document.getElementById("view_modal").style.display="flex";

  }





  //add element function

  function openAddModal(){

    document.getElementById("add_modal").style.display="flex";

  }

  // ----------------------------------------------------------------------------------------------------------------















  // -----------------------------------------------------------------------------------------------------------------------

  //create movie modal / add
  function createMovie(){

    //checking last id of original array
    let lastId;

    if(movies.length!==0){
      lastId = movies[movies.length-1].id;
    }
    else{
      lastId=0;
    }

    

    // create blank array to store data
    let movie ={
      ratings:[],
      id:lastId+1
    }


    //  set the value and and movie array
    movie.title=document.getElementById("add_title").value;
    //  user can put seperated by , and it give you array using split
    movie.genres=document.getElementById("add_genres").value.split(",");
    movie.duration=document.getElementById("add_duration").value;
    movie.releaseDate=document.getElementById("add_releasedate").value;
    movie.storyline=document.getElementById("add_storyline").value;
    movie.actors=document.getElementById("add_actors").value.split(",");
    movie.imdbRating=document.getElementById("add_imdb").value;
    movie.posterurl=document.getElementById("add_posterurl").value;

    movies.push(movie);


    //  add data in local storage
    localStorage.setItem("movies", JSON.stringify(movies));


    //display the adding new movie with all movie
    displayMoviesTable(movies);
    closeModal('add_modal');
    console.log(movie);


    //after submiting form the input field is clear so we need resert function it only work when the all input field under the form
    document.getElementById("add_form").reset();

    // converted back to the text
    document.getElementById("add_releasedate").type="text";
  }







  // convert text to date function
  function converTextToDate(){

    document.getElementById("add_releasedate").type="date";

  }


  // ------------------------------------------------------------------------------------------------------------------------------














  // ---------------------------------------------------------------------------------------------------------------------------------

  // function for set update data
  //set the gobal data/pass data
  let movieToUpdate=null;

  function setUpdate(id){
    
    movieToUpdate = movies.find((movie,index)=>{
      return movie.id === id;
    })


    
    
    // set the value
    document.getElementById("update_title").value = movieToUpdate.title;
    // let genres="";
    // movie.genres.forEach((genre,index)=>{
    //   genres+=genre+", "
    // })
    // using sbstring for cut , of last index and space
    document.getElementById("update_genres").value= convertToCommaString(movieToUpdate.genres);
    document.getElementById("update_duration").value= movieToUpdate.duration;
    document.getElementById("update_releasedate").value= movieToUpdate.releaseDate;
    // using sbstring for cut , of last index and space
    // let actors="";
    // movie.actors.forEach((actor,index)=>{
    //   actors+=actor+", "
    // })
    document.getElementById("update_actors").value=convertToCommaString(movieToUpdate.actors);
    document.getElementById("update_imdb").value = movieToUpdate.imdbRating;
    document.getElementById("update_posterurl").value=movieToUpdate.posterurl;
    document.getElementById("update_storyline").value= movieToUpdate.storyline;
    
    
    document.getElementById("update_modal").style.display="flex";

  }






  // using sbstring for cut , of last index and space
  //creating one function and pass paramter 
  function convertToCommaString(data){

    let stringData = "";

    data.forEach((d,index)=>{
      stringData+=d+", "
    })

    return stringData.substring(0,stringData.length-2);

  }


  // -----------------------------------------------------------------------------------------------------------------
















  // ------------------------------------------------------------------------------------------------------

  //function to update the movie
  function updateMovie(){

    //  set the value and and movie array
    movieToUpdate.title=document.getElementById("update_title").value;
    //  user can put seperated by , and it give you array using split
    movieToUpdate.genres=document.getElementById("update_genres").value.split(",");
    movieToUpdate.duration=document.getElementById("update_duration").value;
    movieToUpdate.releaseDate=document.getElementById("update_releasedate").value;
    movieToUpdate.storyline=document.getElementById("update_storyline").value;
    movieToUpdate.actors=document.getElementById("update_actors").value.split(",");
    movieToUpdate.imdbRating=document.getElementById("update_imdb").value;
    movieToUpdate.posterurl=document.getElementById("update_posterurl").value;

    //  add data in local storage
    localStorage.setItem("movies", JSON.stringify(movies));


    //display the adding new movie with all movie
    displayMoviesTable(movies);
    closeModal('update_modal')

  }


  // ------------------------------------------------------------------------------------------














  // -----------------------------------------------------------------------------------------------------------

  // movie delete function

  function deleteMovie(id){


    //confirmation dilog box
    let confirmation = confirm("Are you sure you want to delete");

    if(confirmation===true){

      let index=movies.findIndex((movie,index)=>{

        return movie.id === id;
    
      })
    
      //splice the given index and delete only 1 
      movies.splice(index,1)
      //also change the local storage 
      localStorage.setItem("movies",JSON.stringify(movies));
    
      // diplay data again
      displayMoviesTable(movies);

    }

    

  }



  // ---------------------------------------------------------------------------------------------------------











  // ---------------------------------------------------------------------------------------------------------------


  //closing all modal fuction

  function closeModal(modal){
    document.getElementById(modal).style.display="none";
  }


  // -------------------------------------------------------------------------------------------------------

















