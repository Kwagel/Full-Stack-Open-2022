import React from 'react';

import axios from "axios";

const Country = ({countries}) => {
    // const country = countries[0].languages
    // console.log(country)
    console.log( countries);
    const api_key = process.env.REACT_APP_API_KEY

    // console.log(countries.capitalInfo.latlng[0])
    const api_call = ("https://api.openweathermap.org/data/3.0/onecall?lat=" +countries.capitalInfo.latlng[0] + "&lon=" + countries.capitalInfo.latlng[1] + "&exclude=minutely,hourly,daily,alerts&appid=" +api_key)
    console.log(api_call)
    let temp,wind, weatherIcon


    axios.get(api_call).then(response => {
        temp = response.temp
        wind = response.wind_speed
        weatherIcon = response.current.weather.icon
    })
    let iconSrc = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
    return (
        <div>
            <h2>name = {countries.name.common}</h2>
            <p>capital {countries.capital}<br/>area {countries.area}</p>
            <h3>languages:</h3>
            <ul>
                {Object.values(countries.languages).map(l => <li> {l}</li>)}
            </ul>
            <img src={countries.flags.png} alt="flag of country"/>

            <h3>Weather in {countries.capital}</h3>
            <p>temperature {temp}</p>
            <img src={iconSrc} alt="weather icon"/>
            <p>wind {wind}m/s</p>
        </div>
    )


}
export default Country
