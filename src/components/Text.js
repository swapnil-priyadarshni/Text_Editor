import React, {useState} from 'react'

export default function Text(props) {
    const[text,setText] = useState('');

    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const handleUpClick =()=>{
        console.log("Uppercase is clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase !! ','success');
    }

    const handleLowClick =()=>{
        console.log("Lowercase is clicked" + text);
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert('Converted to lower case','success');
    }

  return (
    <>
<div className="container" style={{color: props.mode==='dark'?'white': 'black'}} >
<h1>{props.heading}</h1>

<textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black': 'white', color: props.mode ==='dark'?'white':'black'}} rows="10" >
</textarea>

<button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to uppercase</button>

<button className="btn btn-danger my-2 mx-2" onClick={handleLowClick}>Convert to lowercase</button>
</div>

<div className="container my-2" style={{color: props.mode==='dark'?'white': 'black'}} >
    <h1>Your text summary</h1>
    <p className='my-2' > {text.split(" ").length} words and {text.length} charcters </p>
    <p>{0.008 * text.split(" ").length} time to read </p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text:'Enter your text to preview '}</p>
</div>
{/* <button className="btn btn-success my-2 mx-2">Convert to </button>
<button className="btn btn-warning my-2 mx-2">Convert to uppercase</button> */}
    </>
  )
}
