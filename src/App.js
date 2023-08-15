import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Nav from './components/Nav'
//pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Post from './components/pages/Post'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import Logout from './components/pages/Logout'
function App() {
  let isLogged = true;
  let data = {
    'st': 'User Not Login'
  }
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:cat/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={isLogged? <Dashboard /> : <Navigate to="/login" replace state={data} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<h1>404 Error</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
