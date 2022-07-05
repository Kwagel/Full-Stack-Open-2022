import React from 'react';

const Country = ({countries}) => {
    // const country = countries[0].languages
    // console.log(country)
    console.log( countries);
    return (
        <div>
            <h2>name = {countries.name.common}</h2>
            <p>capital {countries.capital}<br/>area {countries.area}</p>
            <h3>languages:</h3>
            <ul>
                {Object.values(countries.languages).map(l => <li> {l}</li>)}
            </ul>
            <img src={countries.flags.png} alt="flag of country"/>
        </div>
    )


}
export default Country
