import React from 'react';


const Countries = ({countries}) => {
    if (countries.length > 10) {
        return (
            <ul>
                <li> Too many matches, specify another filter</li>
            </ul>
        )
    } else if (countries.length === 1) {
        console.log(countries[0])
        const languages = countries[0].languages
        const language = {...languages}
        console.log(languages)
        console.log(language)
        return (

            <div>
                <h2>name = {countries[0].name.common}</h2>
                <p>capital {countries[0].capital}<br/>area {countries[0].area}</p>
                <h3>languages:</h3>
                <ul>
                    {/*{languages.map(lang => <li> {...lang}</li>)}*/}
                </ul>
            </div>
        )
    }
    return (
        <ul>
            {countries.map(country => <li key={country.population}> {country.name.common}</li>)}
        </ul>
    )
}
export default Countries
