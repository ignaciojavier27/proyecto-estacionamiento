import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import MainScreen from './views/MainScreen';
import OwnersScreen from './views/OwnersScreen';
import ServicesScreen from './views/ServicesScreen';
import LoginScreen from './views/LoginScreen';
import RegisterScreen from './views/RegisterScreen';
import LogoutScreen from './views/LogoutScreen';
import ClientNavbar from './components/Navbars/ClientNavbar';
import OwnerNavbar from './components/Navbars/OwnerNavbar';
import Navbar from './components/Navbar';
function App() {

  const [userType, setUserType] = useState("");


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(atob(token.split(".")[1]));
      setUserType(user.tipo_usuario);
      console.log(user.tipo_usuario);
    }
  }, []);

  return (
    <>
      <nav>
        {userType === "cliente" && <ClientNavbar/>}
        {userType === "propietario" && <OwnerNavbar/>}
        {userType === "" && <Navbar />}
      </nav>

      <Routes>
        <Route path='/' element={<MainScreen />}></Route>
        <Route path='/services' element={<ServicesScreen />}></Route>
        <Route path='/owners' element={<OwnersScreen />}></Route>
        <Route path='/signin' element={<RegisterScreen />}></Route>
        <Route path='/login' element={<LoginScreen setUserType={setUserType} />}></Route>
        <Route path='/logout' element={<LogoutScreen setUserType={setUserType} />}></Route>
        <Route path='/*' element={<Navigate to='/'/>}></Route>
      </Routes>

    </>


  );
}

export default App
