const temperatureConverter = {
    toCelsius(f) {
      return ((f - 32) * 5) / 9;
    },
    toFahrenheit(c) {
      return (c * 9) / 5 + 32;
    },
  };
  

  console.log("Conversion to Celsius", temperatureConverter.toCelsius(100).toFixed(2), "°C");
  console.log("Conversion to Fahrenheit", temperatureConverter.toFahrenheit(32).toFixed(2), "°F");
  