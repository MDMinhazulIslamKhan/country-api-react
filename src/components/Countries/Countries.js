import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    let n = 0;
    return (
        <div>
            <h1>Visiting every country of the world</h1>
            <div className='countries'>
                {countries.map(country =>
                    <Country country={country}
                        number={++n}
                        key={country.cca3}
                    ></Country>
                )}
            </div>
        </div>

    )
};

export default Countries;