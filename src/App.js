import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Homes/Header/Header';
import Home from './Pages/Homes/Home/Home';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
