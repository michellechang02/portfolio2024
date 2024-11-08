import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar2 from './components/Navbar2'
import HomePage from './components/HomePage.js'
import About from './components/About.js'
import Projects from './components/Projects.jsx'
import Fun from './components/Fun.js'
import Blog from './components/Blog.jsx'

function App() {
  return (
    <>
      <Navbar2/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/fun" element={<Fun/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
