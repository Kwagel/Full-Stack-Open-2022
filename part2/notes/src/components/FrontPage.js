import React from 'react';
import Notification from "./Notification";
import Note from "./Note";

const FrontPage = () => {
    return (
        <div>

            <h1>Notes</h1>
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
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
            <Footer/>

            <h1> Notes App</h1>
            <header className="App-header">
                <div className="notes__sidebar">
                    <button className="notes__add" type="button">Add Note</button>
                    <div className="notes__list">
                    </div>
                </div>

                <div className="notes__preview">
                        <textarea className="notes__body" type="text" placeholder="New Note...">
                        </textarea>
                </div>
            </header>
        </div>
    )
}
