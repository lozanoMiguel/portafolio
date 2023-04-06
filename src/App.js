import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home /> } />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
