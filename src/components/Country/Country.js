import React, { useEffect, useState } from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, population, region, flags } = props.country;
    return (
        <div className='country'>
            <h4>{props.number}. {name.common}</h4>
            <img src={flags.png} alt="" />
            <p>{region}</p>
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
        </div>
    );
};

export default Country;