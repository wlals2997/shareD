import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/Main/MainPage'
import Header from './components/Header/Header'
import Select from './pages/Select/SelectOTT/SelectOTT'
import MyPage from './pages/MyPage/MyPage'
import Guide from './pages/Guide/Guide'
import Date from './pages/Select/SelectDate/SelectDate'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/*"  exact element={<MainPage/>}/>
        <Route path="/select"  element={<Select/>}/>
        <Route path="/select/date" exact element={<Date/>}/>
        <Route path="/guide" element={<Guide/>}/>
        <Route path="/myPage"  element={<MyPage/>}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
