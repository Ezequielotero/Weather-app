
import './index.css';
import React, { useState } from 'react'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { Route } from 'react-router-dom';
import Ciudad from './components/Ciudad.jsx';
import Swal from 'sweetalert'


export default function App() {
   const [cities ,setCities] = useState([]);
  function onSearch(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          var aux=cities.filter(ci => ci.id!== city.id)
          if (cities.length!==aux.length) {
            Swal({
              icon: 'error',
              title: 'Oops...',
              text: 'The city you entered was already added',
              footer: '<a href>Why do I have this issue?</a>'
            })
          }else{
            setCities( [...aux, city]);
          Swal({
            title:'New city!',
            text:city.name+ ' was added successfully!',
            icon:'success',
            timer:1000
          })}
        } else {
          Swal({
            icon: 'error',
            title: 'Oops...',
            text: 'The city you entered was not found!',
            footer: '<a href>Why do I have this issue?</a>'
          })
        }
      });
    }
      function onClose(id) {
        setCities(cities.filter(c => c.id !== id));
    }
    function onFilter(ciudadId) {
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
      if(ciudad.length > 0) {
          return ciudad[0];
      } else {
          return null;
      }
    }

  return (
    <div className="App">
      <div>
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}/>
      </div>
      <div>
      <Route
        exact path='/'
        render={() => <Cards onClose={onClose} cities={cities}/> }/>
      </div>
      <div>
      <Route
  exact path='/ciudad/:ciudadId'
  render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
/>
      </div>
    </div>

  );
}
