
import './App.css';
// import F1 from './components/f1'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter,Routes,Route}from "react-router-dom";
import  Home from './components/Home';
import About from './components/About';
import Nav from './components/nav';
import Contact from './components/contact';
import Skills from './components/skill';
import Project from "./components/project";
function App() {
  return (
    <div>
      <HashRouter>
      <Nav/>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/skill' element={<Skills/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
        </Routes>
      </HashRouter>
 

    </div>
   
  );
}

export default App;
