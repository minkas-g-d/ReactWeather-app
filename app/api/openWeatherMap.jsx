"use strict";

var axios = require( 'axios' );

const OPEN_WEATHER_APP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=32b2e5928f0e96a9c50856edc84d90b1&units=metric';

module.exports = {
	getTemp: function( location ) {
		var encodedLocation = encodeURIComponent( location );
		var requestUrl = `${OPEN_WEATHER_APP_URL}&q=${encodedLocation}`;
		
		return axios.get( requestUrl ).then(
			function( res ) {
				//debugger;
				if ( res.data.cod && res.data.message ) {
					throw new Error( res.data.message );
				} else {
					return res.data.main.temp;
				}
			},
			function( res ) {
				//debugger;
				throw new Error( resp.data.message );
			}
		);
	}
};
