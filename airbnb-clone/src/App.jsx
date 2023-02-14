import './App.css'
import About from './Components/About'
import Card from './Components/card'
import Navbar from './Components/Navbar'
import data from './data'
function App() {

  const cards = data.map((item) => {
    return (
      <Card
        item={item}
      />
    )
  })
  
  return (
    <div className="App">
      <Navbar />
     <About/>
      <section className='cards--list'>
        {cards}
      </section>
    </div>
  )
}

export default App
