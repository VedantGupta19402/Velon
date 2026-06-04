import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import NavBar from './component/Navigation/NavBar.jsx'
import FullScreenNav from './component/Navigation/FullScreenNav.jsx'

function App() {

  return (
    <div className='text-white overflow-hidden'>
      <NavBar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Agence' element={<Agence />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
