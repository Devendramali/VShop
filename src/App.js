import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Project/Navbar';
import About from './Project/About';
import Home from './Project/Home';
import Vegetable from './Project/Vegetable';
import Testomonial from './Project/Testomonial';
import Contactus from './Project/Contactus';
import Footer from './Project/Footer';

function App() {
  return (
    <div className="App">
     {/* <About/> */}
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path="*" element={<h1>Page Not Found....!</h1>} />
        <Route path='/' element={<Home/>}></Route>
        <Route path='/vegetable' element={<Vegetable/>}></Route>
        <Route path='/testomonial' element={<Testomonial/>}></Route>
        <Route path='/contact Us' element={<Contactus/>}></Route>
        
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
