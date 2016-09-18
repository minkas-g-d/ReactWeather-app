var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h4 className="text-center">The temperature in { location } is {temp} degrees.</h4>
  )
};

module.exports = WeatherMessage;
