async function getWeatherData(city) {
  try {
    let apiKey = `b7dc63f9b5cefc78ba57679620791467`;

    let rawData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!rawData.ok) {
      throw new Error("City not found try something else");
    }
    let realData = await rawData.json();
    if (realData.main.temp < 0) {
      console.warn("Too Cold...", +realData.main.temp + "°C");
    } else if (realData.main.temp > 40) {
      console.warn("Too Hot...", +realData.main.temp + "°C");
    } else {
      console.log(realData);
    }
  } catch (err) {
    console.log(err.message);
  }
}

getWeatherData("Leh");
