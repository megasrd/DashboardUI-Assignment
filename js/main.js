//Stylesheet Switch




//Stylesheet Switch--End




//City Data 

var currentCity;

var city_data;

var city1 = {cityName : "Cape Town, South Africa", population : "3.74m", dotw : "Monday", weather_temp : "22", weather_type : "Sunny", cityImage : "../"};

var city2 = {cityName : "Tokyo, Japan", population : "13.62m", dotw : "Tuesday", weather_temp : "10", weather_type : "Cloudy", cityImage : "../"};

var city3 = {cityName : "New York, USA", population : "8.53m", dotw : "Wednesday", weather_temp : "7", weather_type : "Rainy", cityImage : "../"};

var city4 = {cityName : "Munich, Germany", population : "1.37m", dotw : "Thursday", weather_temp : "9", weather_type : "Windy", cityImage : "../"};


function initiate_cityData() {
    
    
    if (currentCity == null) {
        set_cityData(1);
          
          city_data = new Vue({
    
              el: '.city-data',

              data: {
                  city_name: currentCity.cityName,
                  city_pop: currentCity.population,
                  city_dotw: currentCity.dotw,
                  city_weatherTemp: currentCity.weather_temp,
                  city_weatherType: currentCity.weather_type
              }
          });
      }
    
    if (city_data != null) {
            city_data.city_name = currentCity.cityName;
            city_data.city_pop = currentCity.population;
            city_data.city_dotw = currentCity.dotw;
            city_data.city_weatherTemp = currentCity.weather_temp;
            city_data.city_weatherType = currentCity.weather_type;
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