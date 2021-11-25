import React from "react";
import SecondPart from './part-1b/SecondPart'
import Examples from "./examples/Examples";
import Unicafe from "./part-1d/Unicafe";
import Anecdotes from "./part-1d/Anecdotes";

let counter

const App = () => {
    return (<>
        <h3 style={{ padding: '0.25rem 0.5rem', background: 'lightblue', color: 'black', width: 'max-content' }}>Examples</h3>
        <Examples />
        <hr />
        <h3 style={{ padding: '0.25rem 0.5rem', background: 'lightblue', color: 'black', width: 'max-content' }}>Exercises 1.3.-1.5.</h3>
        <SecondPart counter={counter} />
        <hr />
        <h3 style={{ padding: '0.25rem 0.5rem', background: 'lightblue', color: 'black', width: 'max-content' }}>Exercises 1.6.-1.14.</h3>
        <h4>Unicafe</h4>
        <Unicafe counter={counter} />
        <h3>Anecdotes</h3>
        <Anecdotes />
    </>)
}
export default App