import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import Nav from './pages/Nav';
import Step01 from './pages/select/Step01';
import Step02 from './pages/select/Step02';
import Step03 from './pages/select/Step03';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/"  exact element={<MainPage/>}/>
        <Route path="/step01" exact element={<Step01/>}/>
        <Route path="/step02" exact element={<Step02/>}/>
        <Route path="/step03" exact element={<Step03/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
