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

//var popChart = document.getElementById("popCanvas").getContext("2d");
//
//var donutChart = new Chart( popChart , {
//  type: 'doughnut',
//  data: {
//    datasets: [{
//      backgroundColor: [
//        "#2ecc71",
//        "rgba(250, 250, 250, 0)"
//      ],
//      data: [12, 5]
//    }]
//  }
//});

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
    forecast1_weather_temp : "15",
    forecast1_weather_type :"Windy",
    forecast2_weather_temp : "8",
    forecast2_weather_type : "Rainy",
    forecast3_weather_temp : "14",
    forecast3_weather_type : "Cloudy",
    cityImage : "../"
};

var city2 = {cityName : "Tokyo, Japan", population : "13.62m", dotw : "Tuesday", weather_temp : "10", weather_type : "Cloudy", cityImage : "../"};

var city3 = {cityName : "New York, USA", population : "8.53m", dotw : "Wednesday", weather_temp : "7", weather_type : "Rainy", cityImage : "../"};

var city4 = {cityName : "Munich, Germany", population : "1.37m", dotw : "Thursday", weather_temp : "9", weather_type : "Windy", cityImage : "../"};


function initiate_cityData() {
    
    
    if (currentCity == null) {
        set_cityData(1);
          
          city_data = new Vue({
    
              el: '.vue-dataContainer',

              data: {
                  city_name: currentCity.cityName,
                  
                  today_temp: currentCity.today_weather_temp,
                  today_type: currentCity.forecast2_weather_type,
                  
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