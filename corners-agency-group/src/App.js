import logo from './logo.svg';
import './App.css';
import Example from './components/Header';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={[<Hero/>,<Services/>]} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
