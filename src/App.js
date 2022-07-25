import InputForm from './components/InputForm'
import './App.css'
import QrCode from './components/QrCode'

function App() {
  return (
    <div className="App bg-gradient-to-r from-neutral-800 to-neutral-400 h-screen pt-32">
      <div className="container w-6/12 bg-slate-200 rounded-lg shadow mx-auto ">
        <div className="md:grid md:grid-cols-3">
          <InputForm />
          <QrCode />
        </div>
      </div>
    </div>
  )
}

export default App
