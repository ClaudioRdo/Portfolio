
import './App.css';
import HomePage from './Screens/Home/HomePage';

import GlobalStyle from './globalStyles';
import Navbar from './Screens/Navbar/Navbar';
import About from './Screens/About/About';


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <HomePage/>
      <About/>
    </>
  );
}

export default App;
