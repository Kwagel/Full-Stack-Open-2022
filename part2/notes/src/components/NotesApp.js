import Notification from "./Notification";
import Note from "./Note";
import React from "react"
import {useEffect, useState} from "react";
import noteService from "../services/notes";

const NotesApp = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const notesToShow = showAll ? notes : notes.filter(note => note.important)

    useEffect(() => {
        noteService.getAll().then(initialNotes => {
            setNotes(initialNotes)
        })
    }, [])

    console.log('render', notes.length, 'notes')

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5
        }

        noteService.create(noteObject).then(initialNotes => {
            setNotes(notes.concat(initialNotes))
            setNewNote('')
        })
        // setNotes(notes.concat(noteObject))
        // setNewNote('')
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }
    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id)
        const changedNote = {...note, important: !note.important}
        noteService
            .update(id, changedNote)
            .then(returnedNote => {
                setNotes(notes.map(note => note.id !== id ? note : returnedNote))
            })
            .catch(error => {
                setErrorMessage(
                    `the note '${note.content}' was already deleted from server`
                )
                setTimeout(() => {

                    setErrorMessage(null)
                }, 5000)
                setNotes(notes.filter(n => n.id !== id))
            })
    }
    return (
        <div>
            <Notification className="error" message={errorMessage}/>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} note={note} toggleImportance={() => {toggleImportanceOf(note.id)}}/>
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">save</button>
            </form>


            <header className="App-header">
                <div className="notes__sidebar">
                    <button className="notes__add" type="button">Add Note</button>
                    <div className="notes__list">
                    </div>
                    <button className="notes__add" onClick={() => setShowAll(!showAll)}>
                        show {showAll ? 'important' : 'all'}
                    </button>
                </div>

                <div className="notes__preview">
                        <input className="notes__title" type="text" placeholder="New Note...">
                            <textarea className="notes__body">Take Note...</textarea>
                        <textarea className="notes__body" placeholder="New Note...">
                        </textarea>
                </div>
            </header>
        </div>

)
}
export default NotesApp
