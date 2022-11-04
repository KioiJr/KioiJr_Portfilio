
import './App.css';
// import Particles from 'react-particles-js';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Header from './Components/Header';
import Body from './Components/Body';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';




function App() {
  return (
    <>
      <Navbar/> 
      <Header/>
      <Body/>
      <Projects/>
      <Experience/>
      <Contacts/>
    </>
  );
}

export default App;
