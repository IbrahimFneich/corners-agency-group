import logo from './logo.svg';
import './App.css';
import Example from './components/Header';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Clients from './components/Clients';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={[<Hero/>,<Services/>,<Clients/>]} />
          <Route path="/about" element={<About/>} />
          <Route path="/team" element={<Team/>} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;
