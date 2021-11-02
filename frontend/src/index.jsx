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
             const {feels_like} = data.main;
             const {id,main} = data.weather[0];
             location.textContent = name;
             climate.textContent = main;
             tempValue.textContent = temp;
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

  async componentDidMount() {
    const weather = await getWeatherFromApi();
    this.setState({icon: weather.icon.slice(0, -1)});
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
