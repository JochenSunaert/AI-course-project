import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/Home.jsx';
import Sprookjes from './pages/Sprookjes.jsx';
import Making from './pages/Making.jsx';
import About from './pages/Aboutportaal.jsx';
import Repelsteeltje from './pages/Repelsteeltje.jsx';

function App() {
  return (
    <>
      <main>
      <BrowserRouter basename="/AI-course-project/">
       <Routes>
        <Route path="/">
          <Route index element ={<Home />}/>
          <Route path="/sprookjes" element ={<Sprookjes />}/>
          <Route path="/making" element ={<Making />}/>
          <Route path="/about" element ={<About />}/>
          <Route path="/repelsteeltje" element ={<Repelsteeltje />}/>
        </Route>
       </Routes>
       </BrowserRouter>
      </main>
    </>
  )
}

export default App;