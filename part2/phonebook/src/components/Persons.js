import React from 'react';

const Persons = ({filteredContacts, confirmDelete}) => {
    return (
        <ul>
            {filteredContacts.map(person => <li key={person.name}>{person.name} {person.number} <button onClick={() => {confirmDelete(person.id)}}>delete </button></li>)}
        </ul>

    )
}
export default Persons
