
import { Routes, Route } from 'react-router-dom';

import Home from "../Home";
import About from "../About";
import Projects from '../Projects';

const Main = () => {
  return (
    <Routes>
      <Route  path='/' Component={Home}></Route>
      <Route  path='/About' Component={About}></Route>
      <Route path = '/Projects' Component={Projects}></Route>
    </Routes>
  );
}

export default Main;