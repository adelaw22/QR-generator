import InputForm from './components/InputForm'
import './App.css'
import QrCode from './components/QrCode'
import { useState, createContext } from 'react'

export const InputContext = createContext()

function App() {
  const [inputValue, setInputValue] = useState({
    url: '',
    color: '',
  })

  const value = { inputValue, setInputValue }

  return (
    <div className="App bg-gradient-to-r from-neutral-800 to-neutral-400 h-screen pt-32">
      <div className="container w-7/12 bg-slate-200 rounded-lg shadow mx-auto ">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default App
