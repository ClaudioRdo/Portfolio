
import './App.css';
import HomePage from './Screens/Home/HomePage';

import GlobalStyle from './globalStyles';
import Navbar from './Screens/Navbar/Navbar';
import About from './Screens/About/About';
import Proyects from './Screens/Projects/Proyects';
import Skills from './Screens/Skills/Skills';


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <HomePage/>
      <About/>
      <Proyects/>
      <Skills/>
    </>
  );
}

export default App;
