import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import UserProfileUI from './components/UserProfileUI';
import Register from './components/Register';

function App() {


  
  const [loginWindow, setLoginWindow] = useState(false);
  const [profileWindow, setProfileWindow] = useState(true);
  const [registerWindow, setRegisterWindow] = useState(false);



  return (
    <div className="flex w-full h-screen">
    
    { loginWindow && <Login/>}
    {registerWindow && <Register/>}
    {profileWindow &&< UserProfileUI/>}

    </div>
  );
}

export default App;
