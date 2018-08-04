
"use strict";
var worldMap = {"IND" : { "MAH":["Pune","Nasik","Mumbai"], 
                          "MP" :["Bhopal","Indore","Gwalior"], 
                          "UP" :["Lucknow", "Agra", "Kanpur"] 
                         } 
                }  
var wMap = {};
var sMap = {};
var mahCities = [];
var mpCities = [];
var upCities = [];

mahCities = ["Pune","Nasik", "Mumbai"];
sMap["MAH"] = mahCities;

mpCities = ["Bhopal", "Indore", "Gwalior"];
sMap["MP"] = mpCities;

upCities = ["Lucknow", "Agra", "Kanpur"];
sMap["UP"] = upCities;

wMap["IND"] = sMap;

var getCities = function (stateName)
    {

       var cities = [];
    
       for(var num = 0; num < sMap[stateName].length ; num ++)
        {

           var city = stateName + "-" + sMap[stateName][num] + "-" + (num+1) ;

            cities.push(city);
        }

        return cities;
 }

     var populateStateMap = function(countryName)
      {
      	var states = ["MAH", "UP", "MP"];
      	var sMap = {};

      	for(var state of states)
      	{
      		sMap[state] = getCities(state);
      	}
      	  return sMap;
      }

      var populateWMap = function()
      {
      	var countries = ["IND"];
      	var wMap = {};

      	for(var country of countries)
      	{
      		wMap[country] = populateStateMap();
      	}
      	  return wMap;
      }

      var displayWMap = function()
      {
      	var wMap = populateWMap();
        var ans = "";

      	for(var country in wMap)
      	{
      		var sMap = wMap[country];

      		for(var state in sMap)
      		{
              
              var cities = sMap[state];

              for(var city of cities)
              {
              	ans = ans + '"' + country + "-" + city +'"' + ',';
              }
      		}
           console.log(ans);
      	}
      }
       displayWMap();



