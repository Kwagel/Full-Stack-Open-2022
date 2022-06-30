import React from 'react';
import axios from "axios";

const Country = (countries) => {
    const country = countries[0].languages
    console.log(country)

    return (
        <div>
            <h2>name = {countries[0].name.common}</h2>
            <p>capital {countries[0].capital}<br/>area {countries[0].area}</p>
            <h3>languages:</h3>
            <ul>
                {country.map(lang => <li> {lang} </li>)}
            </ul>
        </div>
    )


}
export default Country
