
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
// import {Route,Switch, Link} from 'react-router-dom'



function App() {
  return (
    <>
      <Navbar/> 
      <Header/>
      <Body/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
