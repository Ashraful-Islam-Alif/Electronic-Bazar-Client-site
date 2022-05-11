import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import RequireAuth from './Login/RequireAuth/RequireAuth';
import NotFound from './Notfound/Notfound';
import AddItem from './Pages/AddItem/AddItem';
import Blogs from './Pages/Homes/Blogs/Blogs';
import Footer from './Pages/Homes/Footer/Footer';
import Header from './Pages/Homes/Header/Header';
import Home from './Pages/Homes/Home/Home';
import ItemDetails from './Pages/Homes/Inventory/ItemDetails/ItemDetails';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/inventory/:itemId' element={
          <RequireAuth>
            <ItemDetails></ItemDetails>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
