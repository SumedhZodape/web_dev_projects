let weather = {
    apiKey:"f23ba06fd68482308abd4fcb5e000f90",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apiKey)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            // console.log(data);
            this.displayWeather(data);
        })
        // .catch((err)=>{
        //     console.log(err);
        // })
    },

    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0]; 
        const {temp, humidity} = data.main; 
        const {speed} = data.wind;
        // console.log(name, icon, description, temp, humidity, speed)
        
        document.querySelector(".city").innerText = "Weather in "+ name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "℃";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed : " + speed + " km/h";

        // for searching first time
        document.querySelector(".weather").classList.remove("loading");

        // for background images
        // document.body.style.backgroundImage = "url('https://unsplash.com/1600x900/?"+ name +"')"
    },

    search: function(){
       this.fetchWeather(document.querySelector(".search-bar").value);
    }

}


// click for search icon and call weather function
document.querySelector(".search button").addEventListener("click", function(){
  weather.search();
})


//for entering button 
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})


// on reload the page
weather.fetchWeather("Nagpur");



function updateClock(){
    var currentdate = new Date();
    const days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let day = days[currentdate.getDay()]
    let month = months[currentdate.getMonth()];
    var cdate = day +", "+ month +" " + currentdate.getFullYear();

    var hours = currentdate.getHours();
    var minutes = currentdate.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ":" +currentdate.getSeconds() +' ' + ampm;

    document.getElementById("dateTimes").innerHTML=`<p>${cdate}</p><p>${strTime}</p>`;
    setTimeout(updateClock, 1000);
}

updateClock(); // initial call
