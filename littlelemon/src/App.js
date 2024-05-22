
import './App.css';
import * as React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Header from './components/Header';
import Menu from './components/Menu'
import{Routes, Route} from 'react-router-dom'
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Reservations from './components/Reservations';
import HomePage from './components/HomePage'
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';

function App() {
  return (
<>
<Header/>

<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/reservations" element={<Reservations/>}/>
  <Route path="/order-online" element={<OrderOnline/>}/>
  <Route path="/login" element={<Login/>}/>
</Routes>
<Footer/>
</>
  );
}

export default App;
