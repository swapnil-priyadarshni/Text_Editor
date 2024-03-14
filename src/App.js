// import logo from './logo.svg';   
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

 const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black ';
      showAlert('Dark Mode has been enabled', 'success');
      document.title = 'Demo-Dark';
      setInterval(() => {
        document.title = 'Demo-Dark Install Now ';
      }, 1500 );
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled','success');
      document.title = 'Demo-light';

    }
    
  }

  return (
   <>
   
   <Navbar title="Demo" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert} />
   <div className="container my-3">

   {<Text heading="Enter Your Text Here" showAlert={showAlert} mode= {mode} toggleMode={toggleMode} />}
   </div>
   
   </>
  );
}

export default App;
