import {useState} from 'react'
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";


const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ])

    const [newDetails, setNewDetails] = useState({
        name: '', number: ''
    })
    // const [newName, setNewName] = useState('')
    // const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const filteredContacts = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewDetails({...newDetails, name: event.target.value})

    }
    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewDetails({...newDetails, number: event.target.value})

    }
    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)

    }


    const addPerson = (event) => {
        event.preventDefault()
        if (persons.find(person => person.name === newDetails.name)) {
            alert(`${newDetails.name} is already added to phonebook`)
            return;
        }
        const personObject = {
            name: newDetails.name,
            number: newDetails.number,
            id: persons.length + 1
        }
        setPersons(persons.concat(personObject))
        setNewDetails({name: '', number: ''})
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={filter} onChange={handleFilterChange}/>
            <h3>Add a new</h3>
            <PersonForm onSubmit={addPerson} value={newDetails} nameChange={handleNameChange}
                        numberChange={handleNumberChange}/>
            <h3>Numbers</h3>
            <Persons filteredContacts={filteredContacts}/>
        </div>
    )
}

export default App