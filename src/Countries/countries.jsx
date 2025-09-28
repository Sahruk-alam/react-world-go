import React, { use, useState } from 'react';
import Country from '../Country/Country'
import './Countries.css'
const Countries = ({fetchPromise}) => {
    const countriesData=use(fetchPromise)
    const Countriess=countriesData.countries
    // console.log(Countriess)
    const [count,setCount]=useState([])
    const handleCount=(country)=>{
        // console.log('Visited country counted',country)
        const newCount=[...count,country]
        setCount(newCount)
        
    }
    const [flags,setFlag]=useState([])
    const handleFlag=(flag)=>{
        const newFlag=[...flags,flag]
        console.log(flag)
        setFlag(newFlag)
    }

    return (
        <div>
            <h1>In the country : {Countriess.length}</h1>
            <h3>Total Visited country : {count.length} </h3>
            <h2>Visited Total Flag : {flags.length} </h2>
            <ol>
                {
                    count.map(country => <li key={country.cca3.cca3}> 
                        {country.name.common}</li>)
                }
            </ol>
            <div className='flagSize'>
              {
                flags.map((flag,index)=> <img key={index} src={flag}></img>)
            }  
            </div>
            
           <div className='Countries'>
             {
              Countriess.map(country=> <Country key={country.cca3.cca3} 
                country={country} handleFlag={handleFlag} handleCount={handleCount}></Country>)  
            }
           </div>
        </div>
    );
};

export default Countries;