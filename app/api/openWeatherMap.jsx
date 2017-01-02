var axios = require('axios');

 const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=55a9e51b4e190799fde258f5e03c85f4&units=imperial';

 module.exports = {
   getTemp: function (location) {
     var encodedLocation = encodeURIComponent(location);
     //template string --> new feature in es6
     var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

     return axios.get(requestUrl).then(function (res) {
       if (res.data.cod && res.data.message){
         throw new Error(res.data.message);
       }else {
         return res.data.main.temp;
       }

     }, function (res) {
       throw new Error(res.data.message);

     });

   }
 }
