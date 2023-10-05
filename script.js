let weather = {
    apikey: "81558640bc898e09a0eb21cd44a66c62",
    fetchweather: function (city) {
        fetch(
       "https://api.openweathermap.org/data/2.5/weather?q=" + 
       city + 
       "&units=metric&appid="+
       this.apikey
    )
    .then((response) => {
        console.log(response);
        if (response.ok) {
            alert("No weather found.");
            throw new Error ("No weather found.");
        }
        return response.json();
    } )
     .then((data) => this.displayweather(data));
    },
    displayweather: function (data) {
        console.log(data)
        const { name } = data;
        const { icon,description  } = data.weather[0];
        const { temp,humidity  } = data.main;
        const { speed  } = data.wind;
        document.querySelector(".city").innerText = "weather in" + name;
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = innerText = temp + "°C";
        document.querySelector(".humidity").innerText = 
        "Humidity:" + humidity + "%"; 
        document.querySelector(".wind").innerText = 
        "Wind speed:" + speed + "Km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = 
        "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function ()  {
        this.fetchweather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
.querySelector(".search-bar")
.addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        weather.search();
    }
});

weather.fetchweather("pune");


