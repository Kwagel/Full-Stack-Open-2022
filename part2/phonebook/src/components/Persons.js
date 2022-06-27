import React from 'react';

const Persons = ({filteredContacts}) => {
    return (
        <ul>
            {filteredContacts.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
        </ul>

    )
}
export default Persons
