import {useState} from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]


    const [properties, setProperties] = useState({
        selected: 0, votes: new Array(anecdotes.length).fill(0)
    })
    console.log(properties.votes[properties.selected])
    const randomQuote = () => {
        const randomNum = Math.floor(Math.random() * anecdotes.length)
        setProperties({...properties, selected: randomNum})
    }
    const vote = () => {
        const newProperties = {...properties}
        newProperties.votes[newProperties.selected]++
        setProperties(newProperties)
    }


    return (
        <div>
            <Header text='Anecdote of the day'/>
            <p>{anecdotes[properties.selected]} </p>
            <p>has {properties.votes[properties.selected]} votes</p>
            <Button clicked={randomQuote} text='next anecdote'/>
            <Button clicked={vote} text='vote'/>
            <Header text='Anecdote with most votes'/>
            <MostVotes anecdotes={anecdotes} votes={properties.votes}/>
        </div>
    )
}
const MostVotes = ({anecdotes, votes}) => {
    const index = votes.indexOf(Math.max(...votes))
    return (
        <>
            <p>{anecdotes[index]}</p>
            <p>has {votes[index]} votes</p>
        </>
    )
}

const Button = ({clicked, text}) => <button onClick={clicked}>{text}</button>
const Header = ({text}) => <h1>{text}</h1>

export default App
