import './App.css'
import Home from './components/home'
import Start from "./components/Start";
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/start' element={<Start />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
