import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar2 from './components/Navbar2.tsx'
import HomePage from './components/HomePage.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Fun from './components/Fun.tsx'
import Blog from './components/Blog.tsx'

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

export default App
