import React from 'react';
import Card from './Card.jsx';
import './cards.css'

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          />)}
      </div>
    );
  } else {
    return(
      <div className="vacio">
          To add a city, go to the text input on the navigation bar and write
          the name of the city that you want to add and press the green button.
        
        
          If you want to check the details of a city, just add it and then click
          on its card.
        
      </div>
    )
  }
}