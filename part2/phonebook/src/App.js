import {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";


const App = () => {
    const [persons, setPersons] = useState([])
    const [newDetails, setNewDetails] = useState({name: '', number: ''})
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(null)
    const [messageType, setMessageType] = useState('')


    useEffect(() => {
            personService.getAll().then(initialNotes => setPersons(initialNotes))
        }
        , [])

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
            if (window.confirm(`${newDetails.name} is already added to the phonebook, replace the old number with a new one?`)) {
                const person = persons.find(person => person.name === newDetails.name)
                const changedContact = {...person, number: newDetails.number}
                personService.update(person.id, changedContact).then(updatedNote => {
                    setPersons(persons.map(p => p.id !== person.id ? p : updatedNote))
                    setNewDetails({name: '', number: ''})
                })
            }
            setMessageType('notification')
            setMessage(`Changed ${newDetails.name}'s number to ${newDetails.number}`)
            setTimeout(()=>{
                setMessage(null)
            },5000)
            return;
        }
        const personObject = {
            name: newDetails.name,
            number: newDetails.number,
            id: persons.length + 1
        }

        personService.create(personObject).then(newNote => {
            setPersons(persons.concat(newNote))
            setNewDetails({name: '', number: ''})
        })
        setMessageType('notification')
        setMessage(`Added ${newDetails.name}`)
        setTimeout(()=>{
            setMessage(null)
        },5000)
    }

    const deleteContact = (id) => {
        if (window.confirm(`Do you really want to delete ${newDetails.name}?`)) {
            personService.remove(id).then(response => {
                console.log(response)
                setPersons(persons.filter(p => p.id !== id))
                setMessageType('notification')
                setMessage(`Information of ${newDetails.name} has been deleted`,)
                setTimeout(()=>{
                    setMessage(null)
                },5000)
            })
                .catch(error => {
                    setMessageType('error')
                    setMessage(`Information of ${newDetails.name} has already been removed from server`,)
                    setTimeout(()=>{
                        setMessage(null)
                    },5000)
                })
        }
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Notification message={message} type={messageType}/>
            <Filter value={filter} onChange={handleFilterChange}/>
            <h3>Add a new</h3>
            <PersonForm onSubmit={addPerson} value={newDetails} nameChange={handleNameChange}
                        numberChange={handleNumberChange}/>
            <h3>Numbers</h3>
            <Persons filteredContacts={filteredContacts} confirmDelete={deleteContact}/>
        </div>
    )
}

export default App
