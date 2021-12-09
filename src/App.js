import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import SelectPage from './pages/SelectPage';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/"  exact={true} element={<MainPage/>}/>
        <Route path="/select" exact={true} element={<SelectPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
