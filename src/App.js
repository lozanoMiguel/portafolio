import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ProjectsContainer from './components/ProjectsContainer'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/projects' element={ <ProjectsContainer/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
