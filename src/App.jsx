import { useState } from 'react'
import Validation from './Validation/Validation'
import Char from './Char/Char'
import Header from './Nav/Header'
import './App.css'

function App() {

  const [userState, setUserState] = useState({
    userInput: ''
  })


  const inputChangeHandler = (event) => {
    setUserState({
      userInput: event.target.value
    })
  }

  const CharList = userState.userInput.split('').map((ch, index) => {
    return <Char character={ch} key={index} clicked={() => deleteCharHandler(index)} />
  })

  const deleteCharHandler = (index) => {
    const text = userState.userInput.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    setUserState({
      userInput: updatedText
    })
  }

  return (
    <div className="App">
      <Header/>
      <div className='flex justify-center align-middle mt-10'>
        <div>
          <input type="text" className='p-2 bg-white border-4 border-slate-500 rounded-2xl focus:outline-none focus:border-sky-500' onChange={inputChangeHandler} value={userState.userInput} />
          <p className='font-bold font-mono'>{userState.userInput}</p>
          <Validation inputLength={userState.userInput.length} />
        </div>
      </div>
          {CharList}
    </div>
  )
}

export default App
