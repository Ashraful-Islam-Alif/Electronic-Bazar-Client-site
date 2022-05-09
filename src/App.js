import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Notfound/Notfound';
import Footer from './Pages/Homes/Footer/Footer';
import Header from './Pages/Homes/Header/Header';
import Home from './Pages/Homes/Home/Home';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
