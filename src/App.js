import {Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './pages/shared/Header';
import Footer from './pages/shared/Footer';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

function App() {
  return (
    <div className=' bg-primary'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='home' element={<Homepage />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
