import React, { useState } from 'react'
const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}> {text} </button>
}
const StatisticLine = ({ value, text }) => {
    return <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
}
const Statistics = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) { return <p>No feedback given</p> }
    else {
        return (

            <table>
                <StatisticLine text="Good" value={good} />
                <StatisticLine text="Neutral" value={neutral} />
                <StatisticLine text="Bad" value={bad} />
                <StatisticLine text="All" value={good + neutral + bad} />
                <StatisticLine text="Average" value={(good + neutral + bad)/ 3} />
                <StatisticLine text="Positive" value={`${good * 100 / (good + neutral + bad)}%`} />
            </table>
        )
    }
}

const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const increaseGoodByOne = () => setGood(good + 1)
    const increaseNeutralByOne = () => setNeutral(neutral + 1)
    const increaseBadByOne = () => setBad(bad + 1)

    return (
        <div>
            <h1>Unicafe</h1>
            <h2>Give feedback</h2>
            <Button handleClick={increaseGoodByOne} text='good' />
            <Button handleClick={increaseNeutralByOne} text='neutral' />
            <Button handleClick={increaseBadByOne} text='bad' />
            <h2>Statistics</h2>
            <Statistics text='Good' good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default Unicafe