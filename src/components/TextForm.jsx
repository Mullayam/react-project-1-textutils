import React, {useState} from 'react'

export default function TextForm(props) {
  
    const handelUpClick = ()=>{
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Conveted to upeercase","warning","yeah");
    }
    const handelDownClick = ()=>{
        let dText= text.toLowerCase();
        setText (dText);
        props.showAlert("Conveted to LoweCase","warning","yeah");
    }
    const handleOnChange = (event) =>{
    setText(event.target.value);    
    }
    const resetForm = ()=>{
    setText("");
    }
    const handleCopy =() =>{
      props.showAlert("Copied to Clipboard","warning","Woohou");    
      navigator.clipboard.writeText(text);
      document.getSelection.removeAllRanges();  
     
    }
    const removeSpaces =() => {      
      let newText2= text.split(/[ ]+/);
      setText(newText2.join(" "))
    }

    const [text, setText]= useState('Enter Text Here');

  return (
    <>
     
    <div style={{ backgroundColor: props.mode === 'dark'?'transparent':'white',color: props.mode === 'dark'?'white':'black'}}>
    <h1>{props.heading }</h1>
     
    <textarea style={{ backgroundColor: props.mode === 'dark'?'transparent':'white',color: props.mode === 'dark'?'white':'black'}} className="form-control" value={text} onChange={handleOnChange}rows="8" id="floatingTextarea2" ></textarea>
    
  
  <button disabled={text.length ===0} onClick={handelUpClick} className='btn btn-primary mx-1 mt-2'>Upper Case</button>
  <button disabled={text.length ===0} onClick={handelDownClick} className='btn btn-primary mx-1 mt-2'>Lower Case</button>
  <button disabled={text.length ===0}  onClick={handleCopy} className='btn btn-primary mx-1 mt-2'>Copy Text</button>
  <button disabled={text.length ===0} onClick={resetForm} className='btn btn-primary mx-1 mt-2'>Reset</button>
  <button disabled={text.length ===0} onClick={removeSpaces} className='btn btn-primary mx-1 mt-2'>RemoveSpaces</button>
  <div className="conatiner my-3">
    <h3>Your Text Summary</h3>
    <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words Count.<br></br>   Total Characters:
    {text.length}  <br></br> 
    {0.008* text.split(" ").length} Minutes will Take To read.
     </p>
     <hr ></hr>
  </div>
  </div>
    </>
  );
}
