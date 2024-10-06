import MainScreen from './views/MainScreen';
import OwnersScreen from './views/OwnersScreen';
import ServicesScreen from './views/ServicesScreen';
import LoginScreen from './views/LoginScreen';

import { Routes, Route, Navigate } from 'react-router-dom'
import RegisterScreen from './views/RegisterScreen';
function App() {

  return (
    <Routes>
      <Route path='/' element={<MainScreen></MainScreen>}></Route>
      <Route path='/services' element={<ServicesScreen></ServicesScreen>}></Route>
      <Route path='/owners' element={<OwnersScreen></OwnersScreen>}></Route>
      <Route path='/sign' element={<RegisterScreen></RegisterScreen>}></Route>
      <Route path='/login' element={<LoginScreen></LoginScreen>}></Route>
      <Route path='/*' element={<Navigate to='/'/>}></Route>
    </Routes>
  );
}

export default App
