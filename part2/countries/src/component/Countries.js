import React from 'react';
import axios from "axios";
import Country from "./Country";

const Countries = ({countries}) => {
    if (countries.length > 10) {
        return (
            <ul>
                <li> Too many matches, specify another filter</li>
            </ul>
        )
    } else if (countries.length === 1) {

        return (
         <Country countries={countries}/>
        )
    }
    return (
        <ul>
            {countries.map(country => <li key={country.population}> {country.name.common}</li>)}
        </ul>
    )
}
export default Countries
