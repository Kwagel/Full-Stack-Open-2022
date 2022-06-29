import React from 'react';

const Note = ({note,label, toggleImportance}) => {
    return (
        <li>{note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

export default Note
