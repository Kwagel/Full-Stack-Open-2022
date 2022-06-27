import React from 'react';

const PersonForm = ({onSubmit, value, nameChange, numberChange}) => {
    return(
        <form onSubmit={onSubmit}>
            <div>name: <input value={value.name} onChange={nameChange}/></div>
            <div>number: <input type='tel' value={value.number} onChange={numberChange}/></div>
            <div>
                <button type="submit"
                >add
                </button>
            </div>
        </form>
    )
}
export default PersonForm
