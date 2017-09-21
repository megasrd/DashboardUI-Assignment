//Stylesheet Switch

//var cssTemplates = [
//  { name: 'Cape Town', value: 'css/city1.css'},
//  { name: 'Tokyo', value: 'css/city2.css'}
//];
//
//var cssSwitch = new Vue({
//    
//    el: '.cssLink',
//    
//    data: {
//        url: cssTemplates[0].value
//    },
//    
//    method: {
//        assignStyle : function assignCSS() {
//            alert(url);
//        }
//    }
//});






//var templates = [
//  { id: 1, name: 'Dark', value: 'css/dark.css', logo: 'css/dark.css'},
//  { id: 2, name: 'Light', value: 'css/light.css', logo: 'css/light.css'}
//];
//Stylesheet Switch--End



//Chart.js


//popChart

var popChart = document.getElementById("popCanvas").getContext("2d");

var donutChart = new Chart( popChart , {
  type: 'doughnut',
  data: {
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "rgba(250, 250, 250, 0)"
      ],
      data: [12, 5]
    }]
  }
});

//popChart -- End

//travelChart

//var travelChart = document.getElementById("travelCanvas").getContext("2d");
//
//var barChart = new Chart( travelChart, {
//  type: 'horizontalBar',
//  data: {
//    datasets: [{
//      backgroundColor: [
//        "#2ecc71",
//        "#522ecc",
//        "#cc522e",
//        "#ccae2e"
//      ],
//      data: [12, 5, 2, 7]
//    }]
//  }
//});


//travelChart -- End

//Chart.js -- End


//City Data 

var currentCity;

var city_data;

var city1 = {
    cityName : "Cape Town, South Africa", 
    population : "3.74m", dotw : "Monday", today_weather_temp : "22", 
    today_weather_type : "Sunny",
    today_weather_img : "../images/weather-icons/weatherIcons-01.png",
    forecast1_weather_temp : "15",
    forecast1_weather_type :"Windy",
    forecast1_weather_image: "../images/weather-icons/weatherIcons-02.png",
    forecast2_weather_temp : "8",
    forecast2_weather_type : "Rainy",
    forecast2_weather_image: "../images/weather-icons/weatherIcons-03.png",
    forecast3_weather_temp : "14",
    forecast3_weather_type : "Cloudy",
    forecast3_weather_image: "../images/weather-icons/weatherIcons-04.png",
    cityImage : "../"
};

var city2 = {
    cityName : "Tokyo, Japan", 
    population : "13m", dotw : "Tuesday", today_weather_temp : "15", 
    today_weather_type : "Windy",
    today_weather_img : "../images/weather-icons/weatherIcons-02.png",
    forecast1_weather_temp : "22",
    forecast1_weather_type :"Sunny",
    forecast1_weather_image: "../images/weather-icons/weatherIcons-01.png",
    forecast2_weather_temp : "5",
    forecast2_weather_type : "Windy",
    forecast2_weather_image: "../images/weather-icons/weatherIcons-02.png",
    forecast3_weather_temp : "12",
    forecast3_weather_type : "Sunny",
    forecast3_weather_image: "../images/weather-icons/weatherIcons-01.png",
    cityImage : "../"
};

var city3 = {
    cityName : "New York, USA", 
    population : "8.5m", dotw : "Wednesday", today_weather_temp : "12", 
    today_weather_type : "Rainy",
    today_weather_img : "../images/weather-icons/weatherIcons-03.png",
    forecast1_weather_temp : "12",
    forecast1_weather_type :"Windy",
    forecast1_weather_image: "../images/weather-icons/weatherIcons-02.png",
    forecast2_weather_temp : "5",
    forecast2_weather_type : "Cloudy",
    forecast2_weather_image: "../images/weather-icons/weatherIcons-04.png",
    forecast3_weather_temp : "7",
    forecast3_weather_type : "Rainy",
    forecast3_weather_image: "../images/weather-icons/weatherIcons-03.png",
    cityImage : "../"
};

var city4 = {
    cityName : "Munich, Germany", 
    population : "1.5m", dotw : "Thursday", today_weather_temp : "25", 
    today_weather_type : "Sunny",
    today_weather_img : "../images/weather-icons/weatherIcons-01.png",
    forecast1_weather_temp : "12",
    forecast1_weather_type : "Cloudy",
    forecast1_weather_image: "../images/weather-icons/weatherIcons-04.png",
    forecast2_weather_temp : "7",
    forecast2_weather_type : "Rainy",
    forecast2_weather_image: "../images/weather-icons/weatherIcons-03.png",
    forecast3_weather_temp : "12",
    forecast3_weather_type : "Windy",
    forecast3_weather_image: "../images/weather-icons/weatherIcons-02.png",
    cityImage : "../"
};


function initiate_cityData() {
    
    
    if (currentCity == null) {
        set_cityData(1);
          
          city_data = new Vue({
    
              el: '.vue-dataContainer',

              data: {
                  city_name: currentCity.cityName,
                  cityImage: currentCity.today_weather_img,
                  city_pop: currentCity.population,
                  
                  today_temp: currentCity.today_weather_temp,
                  today_type: currentCity.today_weather_type,
                  today_img: currentCity.today_weather_img,
                  
                  foreimg1: currentCity.forecast1_weather_image,
                  foreimg2: currentCity.forecast2_weather_image,
                  foreimg3: currentCity.forecast3_weather_image,
                  
                  
                  foreTemp1: currentCity.forecast1_weather_temp,
                  foreType1: currentCity.forecast1_weather_type,
                  foreTemp2: currentCity.forecast2_weather_temp,
                  foreType2: currentCity.forecast2_weather_type,
                  foreTemp3: currentCity.forecast3_weather_temp,
                  foreType3: currentCity.forecast3_weather_type
              }
          });
      }
    
    if (city_data != null) {
        
            city_data.city_name = currentCity.cityName;
            city_data.city_pop = currentCity.population;
            city_data.today_img = currentCity.today_weather_img;
            city_data.today_temp = currentCity.today_weather_temp;
            city_data.today_type = currentCity.today_weather_type;
        
            city_data.foreimg1 = currentCity.forecast1_weather_image;
            city_data.foreimg2 = currentCity.forecast2_weather_image;
            city_data.foreimg3 = currentCity.forecast3_weather_image;
        
            city_data.foreTemp1 = currentCity.forecast1_weather_temp;
            city_data.foreTemp2 = currentCity.forecast2_weather_temp;
            city_data.foreTemp3 = currentCity.forecast3_weather_temp;
        
            city_data.foreType1 = currentCity.forecast1_weather_type;
            city_data.foreType2 = currentCity.forecast2_weather_type;
            city_data.foreType3 = currentCity.forecast3_weather_type;
    }
}


function set_cityData(caseNum) {
    
    switch(caseNum) {
            
        case 1:
            currentCity = city1;
            initiate_cityData();
            break;
        
        case 2:
            currentCity = city2;
            initiate_cityData();
            break;
            
        case 3:
            currentCity = city3;
            initiate_cityData();
            break;
            
        case 4:
            currentCity = city4;
            initiate_cityData();
            break; 
    }
    
}



// City Data -- End }