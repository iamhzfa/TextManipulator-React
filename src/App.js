import React, {useState} from 'react'

// import About from './components/About';
import Alert from './components/Alert';
import Function from './components/Function';
import Navbar from './components/Navbar';

// import {
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      typ : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
}

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(20 28 35 / 92%)';
      showAlert("Dark mode has been enable", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'rgb(245, 249, 255)';
      showAlert("Light mode has been enable", "success");
    }
  }



  return (
    <>
      <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* this line is for only deploying pages on github */}
      <Function mode={mode} showAlert={showAlert} />

      {/* <Routes> */}
        
        {/* <Route path="/" element={<Function mode={mode} showAlert={showAlert} />} /> */}
        {/* <Route path="/home" element={<Function mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Function mode={mode} showAlert={showAlert} />} /> */}

      {/* </Routes> */}

    </>
  );
}

export default App;