
import './App.css';
import * as React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Header from './components/Header';
import Menu from './components/Menu'
import{Routes, Route, useNavigate} from 'react-router-dom'
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import BookingPage from './pages/BookingPage';
import {useReducer} from 'react'
import Confirmation from './pages/Confirmation';
import { date } from 'yup';


const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
// const submitAPI = function(formData) {
//   return true;
// };
const initialState = {availableTimes: fetchAPI(new Date())}
const updateTimes = (state,date)=>{
  return {availableTimes: fetchAPI(new Date(date))}
}



function App() {
  const [state, dispatch] = useReducer(updateTimes, initialState)
  //const navigate = useNavigate()
  // const submitForm = (formData) =>{
  //   if (submitAPI(formData)){
  //     navigate('/confirmation', {state: formData})
  //   }
  // }

  return (
<>
<Header/>

<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/order-online" element={<OrderOnline/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path='/bookings' element={<BookingPage availableTimes={state} dispatch={dispatch}  />}/>
  <Route path='/confirmation' element={<Confirmation/>}></Route>
</Routes>
<Footer/>
</>
  );
}

export default App;
