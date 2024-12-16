function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
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
async function checkWeather1(city) {
  const response= await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".bh1").innerHTML=Math.round(data.main.temp)+"°c";
  document.querySelector(".w1").innerHTML = data.wind.speed ;
  document.querySelector(".h1").innerHTML= data.main.humidity;

}
checkWeather1("bhopal");
async function checkWeather2(city) {
  const response= await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".bh2").innerHTML=Math.round(data.main.temp)+"°c";
  document.querySelector(".w2").innerHTML = data.wind.speed ;
  document.querySelector(".h2").innerHTML= data.main.humidity;

}
checkWeather2("mumbai");
async function checkWeather3(city) {
  const response= await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".bh3").innerHTML=Math.round(data.main.temp)+"°c";
  document.querySelector(".w3").innerHTML = data.wind.speed ;
  document.querySelector(".h3").innerHTML= data.main.humidity;

}
checkWeather3("delhi");