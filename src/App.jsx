
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route, Link} from 'react-router-dom'
import Red from './components/Red'
import Blue from './components/Blue'
import Green from './components/Green'
import Purple from './components/Purple'
import Yellow from './components/Yellow'
import './App.css'
import './index.css'

function App() {

  return (
    <>
      <div>
        <div id="navbar">
          <Link className="home" to="/home">Home</Link>
          <Link className="yellow" to="/yellow">YELLOW</Link>
          <Link className="red" to="/red" >RED</Link>
          <Link className="green" to="/green">GREEN</Link>
          <Link className="blue" to="/blue" >BLUE</Link>
          <Link className="purple" to="/purple" >PURPLE</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/yellow" element={<h1>Yellow</h1>} />
          <Route path="/blue" element={<h1>Blue</h1>} />
          <Route path="/purple" element={<h1>Purple</h1>} />
          <Route path="/green" element={<h1>Green</h1>} />
          <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
          </div>
      </div>
    </>
  )
}

export default App
