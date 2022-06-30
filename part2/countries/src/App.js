import React from 'react';
import {useState, useEffect} from "react";
import Countries from "./component/Countries";
import axios from "axios";

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    const onFilterChange = (event) => {
        setFilter(event.target.value)
    }
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then(response => {
            setCountries(response.data)
            console.log(countries)
        })
    }, [])
    const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    return (
        <div>
            <div>find countries <input value={filter} onChange={onFilterChange}/></div>
            <Countries countries={countriesToShow}/>
        </div>
    )
}
export default App;
