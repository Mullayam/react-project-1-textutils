import React from "react";
 
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react';
import Alert from './components/Alert';

// 
function App() {
  const [mode, setMode] = useState('light')
const [alert, setalert] = useState(null)

const showAlert = (message,type,strong)=>{
 setalert({
  msg:message,
  type :type,
  strong:strong,
})
setTimeout(() => {
  setalert(null);
  
}, 1800);
}
  const toggleMode = () =>{
     if(mode ==='light'){
        setMode('dark');
          document.body.style.backgroundColor = '#042743';
          document.body.style.color = 'white';
          document.title= "Change Title";
          showAlert("Dark Mode is Enabled","primary","Wow")
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode is Enabled","info","Wow")
      
      }
  }
  return (
    <> 
    <Navbar mode={mode} toggleMode={toggleMode} title="Home" about="About" contact="Contact"/>
    <Alert alert={alert}/>
    <div className="App">
      <div className="container my-4">

      <TextForm  showAlert={showAlert} heading="Text Analyzer"  mode={mode}/>

      <About mode={mode} />

      
    
      </div>
    </div>
    </>
  );
 
}

export default App;
