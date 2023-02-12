import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <nav className='nav-bar'>
          <img src='./src/img/airbnb-logo.png' width='150px' />
        </nav>

        <div className='photo-grid'>
          <img src='./src/img/photo-grid.png' />
        </div>


        <div className='content'>
          <h1>Online Experiences</h1>
          <p>
            Join uniqye interactive activites led<br></br>
            by one-of-a-king hosts-all without leaving<br></br> home.
          </p>
        </div>


      </header>
    </div>
  )
}

export default App
