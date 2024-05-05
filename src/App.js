import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from "./Components/Pages/LoginPage/Login";
import Register from './Components/Pages/LoginPage/Register';
import Dashboard from "./Components/Pages/Dashboard";
import HospitalList from "./Components/Pages/Facilities/FacilityList";
import AddLocation from "./Components/Pages/Facilities/AddNewLocation";
import EditFacility from './Components/Pages/Facilities/EditLocation';
import LocationsList from "./Components/Pages/Facilities/LocationsList";
import Products from "./Components/Pages/Product";
import AddProduct from "./Components/Pages/Product/AddProduct";
import EditProduct from "./Components/Pages/Product/EditProduct";
import CustomersList from "./Components/Pages/Customers/index";
import CustomerProfile from "./Components/Pages/Customers/CustomerProfile"
import Users from "./Components/Pages/Users";
import Orders from "./Components/Pages/Orders";
import SettingsPage from "./Components/Pages/Settings";
import AddUser from "./Components/Pages/Users/AddUser";
import EditUser from "./Components/Pages/Users/EditUser";
import ForgotPassword from "./Components/Pages/LoginPage/ForgotPassword";
import ResetPassword from "./Components/Pages/LoginPage/ResetPassword";
import OrderDetails from "./Components/Pages/Orders/OrderDetails";
import OrderTracking from './Components/Pages/Orders/OrderTracking';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/facilityList' element={<HospitalList/>} />
        <Route path='/locationList' element={<LocationsList/>} />
        <Route path='/addLocation' element={<AddLocation/>}/>
        <Route path='/editLocation' element={<EditFacility/>}/>
        <Route path='/product' element={<Products/>} />
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/editProduct' element={<EditProduct/>}/>
        <Route path='/customersList' element={<CustomersList/>} />
        <Route path="/customer/:customerId" element={<CustomerProfile/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/addUser' element={<AddUser/>}/>
        <Route path='/editUser' element={<EditUser/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/setting' element={<SettingsPage/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
        <Route path='/orderDetails' element={<OrderDetails/>}/>
        <Route path='/orderTracking' element={<OrderTracking/>}/>
     </Routes>
  );
}

export default App;
