import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

// Fetch weather forecast as well 

const getWeatherForecastFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/forecast`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

// Find weather info based on browser location. 

window.addEventListener("load",() =>{
  let longitude;
  let latitude;
  
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) =>{
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid==${appId}&`;
      fetch(api) 
         .then((response) =>{
             return response.json();
         })
         .then(data =>{
             const {name} = data;
             const {main} = data.weather[0];
             location.textContent = name;
             climate.textContent = main;
             console.log(data);
         })
      })  
  }
}) 

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      timeStamp: "",
      location: "Tampere",
    };
  }

// Add forecast here as well

  async componentDidMount() {
    const weather = await getWeatherFromApi();
    const forecast = await getWeatherForecastFromApi();
    this.setState({icon: weather.icon.slice(0, -1)});
    this.setState({icon: forecast.icon.slice(0, -1)});

    if ("geolocation" in navigator) { // Check if geolocation is available

      console.log("Available");

    } else {

      console.log("Not Available");

    }
  }

  render() {
    const { icon } = this.state;

    return (
      <div className="icon">
        { icon && <img src={`/img/${icon}.svg`} /> }
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
