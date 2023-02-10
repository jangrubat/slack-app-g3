import { useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import UserProfileUI from './components/UserProfileUI';
import Register from './components/Register';

function App() {

  const [ isValidated, setIsValidated ] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isValidated) {
      navigate('/login')
    } else {
      navigate('/main')
    }

  }, [isValidated])
  
  // const [loginWindow, setLoginWindow] = useState(false);
  // const [profileWindow, setProfileWindow] = useState(false);
  // const [registerWindow, setRegisterWindow] = useState(true);



  return (
    <div className="flex w-full h-screen">
    
      <Routes>
        <Route exact path='/main' element={<UserProfileUI />}></Route>
        <Route exact path='/login' element={<Login validation={setIsValidated}/>}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>

    </div>
  );
}

export default App;
