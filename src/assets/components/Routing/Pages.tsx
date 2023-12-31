
import { Routes, Route} from 'react-router-dom';

import Home from "../Home/Home";
import About from "../About/About";
import Projects from '../Projects/Projects';
import Contact from "../Contact/Contact";

const Main = () => {
  return (
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route  path='/About' Component={About}></Route>
      <Route path = '/Projects' Component={Projects}></Route>
      <Route path = '/Contact-me' Component={Contact}></Route>
    </Routes>
  );
}

export default Main;