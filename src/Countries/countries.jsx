import React, { use, useState } from 'react';
import Country from '../Country/Country'
import './Countries.css'
const Countries = ({fetchPromise}) => {
    const countriesData=use(fetchPromise)
    const Countriess=countriesData.countries
    // console.log(Countriess)
    const [count,setCount]=useState([])
    const handleCount=(country)=>{
        console.log('Visited country counted',country)
        const newCount=[...count,country]
        setCount(newCount)
        
    }

    return (
        <div>
            <h1>In the country : {Countriess.length}</h1>
            <h3>Total Visited country :{count.length} </h3>
           <div className='Countries'>
             {
              Countriess.map(country=> <Country key={country.cca3.cca3} 
                country={country} handleCount={handleCount}></Country>)  
            }
           </div>
        </div>
    );
};

export default Countries;