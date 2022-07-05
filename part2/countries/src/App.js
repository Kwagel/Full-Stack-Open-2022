import React from 'react';
import {useState, useEffect} from "react";
import Country from "./component/Country";
import axios from "axios";


const App = () => {
    const [countries, setCountries] = useState([])
    // const [country, setCountry] = useState([])
    const [filter, setFilter] = useState('')

    const onFilterChange = (event) => {
        setFilter(event.target.value)
    }
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then(response => {
            setCountries(response.data)
            // console.log(countries)
        })
    }, [])

    const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    const onCountryChange = (area) => {
        const country = countries.find(c => c.area === area)
        console.log(country)
        setFilter(country.name.common)
    }
    return (
        <div>
            <div>find countries <input value={filter} onChange={onFilterChange}/></div>
            {countriesToShow.length !== 1 ?
                (countriesToShow.length > 10 ?
                        <ul>
                            <li> Too many matches, specify another filter</li>
                        </ul>
                        :
                        <ul>
                            {countriesToShow.map(country => <li key={country.area}>
                                {country.name.common}
                                <button onClick={() => onCountryChange(country.area)}>show</button>
                            </li>)}
                        </ul>
                )
                :
                <Country countries={countriesToShow[0]}/>

            }


        </div>
    )
}
export default App;
