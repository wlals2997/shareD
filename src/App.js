import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/Main/MainPage'
import Header from './components/Header/Header'
import Select from './pages/Select/SelectOTT/SelectOTT'



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/"  exact element={<MainPage/>}/>
        <Route path="/Select" exact element={<Select/>}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
