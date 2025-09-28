import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handleCount,handleFlag}) => {
const  [visited,setVisited]=useState(false)
    // console.log(handleCount)
    const handleButton =()=>{
    // setVisited(visited? false  :true )
    
    setVisited(!visited)
    handleCount(country)
}
    
    // console.log(country.area.area)
    return (
        <div className={`counter ${visited && 'visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common}</h2>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area}{country.area.area>30000 ? " Big state" :
                " Small state"}</p>
            <button onClick={handleButton}>{visited ? "Visited": "Not Visited"}</button>
            <button onClick={()=>{handleFlag(country?.flags?.flags?.png)}}>Add to flag</button>
        </div>
    );
};

export default Country;