import React from 'react'
import "./country.css"

const Country = (props) => {

  const {country} = props;
  const {name, flags, capital, population, area} = country;

  const handleRemove = (name) => {
    props.onRemoveCountry(name);
  };
    
  return (
    <article>
        <div className='country'>
            <img src={flags.png} alt={name.common} className='flag'/>
            <h3>Name: {name.common}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Population: {(population/1000000).toFixed(4)} M </h3>
            <h3>Area: {area} Sq. km</h3>
            <button onClick={()=>{
                handleRemove(name.common);
            }} className='btn'>
                    Remove Country
            </button>
        </div>

    </article>
  )
}

export default Country