import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (  
  <button onClick={onClick}>
  {text} 
  </button>
)

const Max = (props) => {
  let max = props.votes[0];
  let maxIndex = 0;

  for (let i = 1; i < props.votes.length; i++) {
    if (props.votes[i] > max) {
      maxIndex = i;
      max = props.votes[i];
      }
  }

  return (
    <div>
      <p>{props.anecdotes[maxIndex]}</p>
      <p>has {max} votes</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])

  const handleNextClick = () => {
    
    setSelected(Math.floor(Math.random() * 6))
  }

  

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] +=1
    setVotes(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleVoteClick} text='vote' />
      <Button onClick={handleNextClick} text='next anecdote' />
      <h2>Anecdote with most votes</h2>
      <Max anecdotes={props.anecdotes} votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',  
]



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
