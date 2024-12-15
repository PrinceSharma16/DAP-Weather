const apikey="6979082e4d6a53269818bb2be110ffb5 ";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weatherIcon");

async function checkWeather(city) {
    const response= await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
 document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = "Temparature-"+Math.round(data.main.temp)+"°c";
     document.querySelector(".humidity").innerHTML = "Humidity-"+data.main.humidity+"%";
     document.querySelector(".wind").innerHTML = "Wind Speed-"+data.wind.speed + "KM/H";
     document.querySelector(".flikes").innerHTML= "Feels likes-"+data.main.feels_like+"°c"
     document.querySelector(".tempMax").innerHTML= "Max temp-"+data.main.temp_max+"°c"
     document.querySelector(".tempMin").innerHTML= "Min temp-"+data.main.temp_min+"°c"

     if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png";

     }
     else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";

     }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";

     } 
     else if(data.weather[0].main=="Snow"){
        weatherIcon.src="snow.png";

     }
     else if(data.weather[0].main=="Wind"){
        weatherIcon.src="wind.png";

     }
     else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";

     }
     else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";

     }
     else if(data.weather[0].main=="Humidity"){
        weatherIcon.src="humidity.png";

     }

 }

 searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
})