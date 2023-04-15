
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
