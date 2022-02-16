import './App.css';
import { useState, useEffect } from 'react';
import UserComponent from './user/Users'
import { UserContextProvider } from './userContext'

function App() {
 
  const [player, setPlayer] = useState("Player 1")
  const [string, setString] = useState()
 
  const mapButtons = [1,2,3,4,5,6,7,8,9].map( i =>  <Buttons id={i} setPlayer={setPlayer} player={player} key={`button ${i}`}/>)
    
  const handleChange=(e)=>{
    let newValue = e.target.value
    newValue = newValue.toUpperCase()
    setString( newValue )
  }

 const inputWord =()=>(
  <div>
    <label htmlFor='input'>Enter a value</label>
    <input id="input" onChange={handleChange}/>
    <h3>{string}</h3>
  </div>
 )

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tick Tack Toe 
        </h1>
      </header>

      <div className='message'>
        {player}, It's Your Turn
      </div>
      
      <main>

        <div className='grid-container'>
          {mapButtons}
        </div>

        {inputWord()}

        <UserContextProvider>
          <UserComponent />
        </UserContextProvider>

      </main>
    </div>
  );
}

const Buttons =(props)=>{
  const [value, setValue] = useState()
 
  const player1 = "Player 1"
  const player2 = "Player 2"

  const checkWinner=()=>{
    const btns = document.getElementsByClassName("btn")

    for (let i = 0; i < btns.length; i++){
      // console.log(btns[i].outerText)
    }
  }
  useEffect(()=>{
    checkWinner()
  },[value])


  const checkAndSet =()=>{
    if (props.player === player1){
      setValue('X')
      props.setPlayer(player2)
    }
    else {
      setValue('O')
      props.setPlayer(player1)
    }
  }

  return (
    <div className='grid-item'>
      <button className='btn' onClick={()=>checkAndSet()}> 
        {value} 
      </button>
    </div>
  )
}

export default App;
