import React, {createElement } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Contect from './Contect/Contect';
import Footer from './Footer/Footer';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


function Main(){
  return (
    <div>
       <Header />
        <Home />
       <About />
      <Contect />
      <Footer /> 
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);