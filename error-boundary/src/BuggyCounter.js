import React, {useState} from 'react'

const BuggyCounter = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter((prevState) => prevState + 1)
    }

    // Simulater error. Aka, something went wrong.
    if (counter === 5) {
        throw new Error('Simulated error!')
    }

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={handleClick}>+</button>
      </div>
  )
}

export default BuggyCounter