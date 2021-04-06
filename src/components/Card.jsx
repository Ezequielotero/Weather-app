import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert';

export default function Card ({min, max, name, img, onClose, id}) {
  function alert(){  
    Swal({
      position: 'top-end',
      icon: 'success',
      title: 'Card deleted',
      showConfirmButton: false,
      timer: 1500
    })
    onClose()
}
  return (
      <div className="div">
        <div className="btnn">
            <button onClick={alert} className="btn">X</button>
        </div>
        <Link to={`/ciudad/${id}`} >
          <h5 className="card-title">{name}</h5>
          </Link>
          <div className="fotos">
          <div className="row">
              <p>Min🧊: {min}°</p>
              <p>Max🥵: {max}°</p>
            </div>
            <div className="imagen">
            <img className="img" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
            </div>
            </div>
    );
};