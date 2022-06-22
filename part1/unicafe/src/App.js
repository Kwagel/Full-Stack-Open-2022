import {useState} from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <DisplayHeading text='give feedback'/>
            <Button text='good' handleClick={() => setGood(good + 1)}/>
            <Button text='neutral' handleClick={() => setNeutral(neutral + 1)}/>
            <Button text='bad' handleClick={() => setBad(bad + 1)}/>
            <DisplayHeading text='statistics'/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}
const DisplayHeading = ({text}) => {
    return (
        <h1>{text}</h1>
    )
}
const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

const Statistics = ({good, neutral, bad}) => {
    const all = (good + neutral + bad)
    if (all === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <table>
            <tbody>
            <StatisticLine text='good' value={good}/>
            <StatisticLine text='neutral' value={neutral}/>
            <StatisticLine text='bad' value={bad}/>
            <StatisticLine text='all' value={all}/>
            <StatisticLine text='average' value={((1 * good) + (-1 * bad)) / all}/>
            <StatisticLine text='positive' value={(good / all) * 100 + '%'}/>
            </tbody>
        </table>

    )
}

const StatisticLine = ({text, value}) => {
    return (
        <div>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        </div>
    )
}

export default App
