//City Data 

var currentCity;

var city1 = {cityName : "Cape Town, South Africa", population : "1.5m", dotw : "Monday", weather_temp : "12", weather_type : "Sunny"};

var city2 = {cityName : "Tokyo, Japan", population : "1.5m", dotw : "Monday", weather_temp : "12", weather_type : "Sunny"};

var city3 = {cityName : "New York, USA", population : "1.5m", dotw : "Monday", weather_temp : "12", weather_type : "Sunny"};

var city4 = {cityName : "Munich, Germany", population : "1.5m", dotw : "Monday", weather_temp : "12", weather_type : "Sunny"};

function set_cityData(caseNum) {
    
    switch(caseNum) {
            
        case 1:
            currentCity = city1;
            break;
        
        case 2:
            currentCity = city2;
            break;
            
        case 3:
            currentCity = city3;
            break;
            
        case 4:
            currentCity = city4;
            break; 
    }
    
}

// City Data -- End }