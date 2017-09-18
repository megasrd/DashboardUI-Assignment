//Stylesheet Switch





//City Data 

var currentCity;

var city1 = {cityName : "Cape Town, South Africa", population : "1.5m", dotw : "Monday", weather_temp : "12", weather_type : "Sunny", cityImage : "../"};

var city2 = {cityName : "Tokyo, Japan", population : "1.5m", dotw : "Monday", weather_temp : "12", weather_type : "Sunny", cityImage : "../"};

var city3 = {cityName : "New York, USA", population : "1.5m", dotw : "Monday", weather_temp : "12", weather_type : "Sunny", cityImage : "../"};

var city4 = {cityName : "Munich, Germany", population : "1.5m", dotw : "Monday", weather_temp : "12", weather_type : "Sunny", cityImage : "../"};


var city_data = new Vue({
    el: '.location-title',
    
    data: {
        city_name: city1.cityName
    }
});


function set_cityData(caseNum) {
    
    switch(caseNum) {
            
        case 1:
            currentCity = city1;
            city_data.city_name = city1.cityName;
            break;
        
        case 2:
            currentCity = city2;
            city_data.city_name = city2.cityName;
            break;
            
        case 3:
            currentCity = city3;
            city_data.city_name = city3.cityName;
            break;
            
        case 4:
            currentCity = city4;
            city_data.city_name = city4.cityName;
            break; 
    }
    
}



// City Data -- End }