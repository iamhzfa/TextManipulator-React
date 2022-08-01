import React, {useState} from 'react'

function Function(props) {

    const [text, setText] = useState("")

    const handleInput = (e) => {
        setText(e.target.value);
    }

    const handleUpClick = () => {
        // console.log("UpperCase was Clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted to lowercase', 'success');
    }
    const handleCopyClick = () => {
        let text = document.getElementById("box");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleRmvSpcClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed extra space', 'success');
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert('Cleared', 'success');
    }


  return (
    <div className='container'>
    
        <div className='mx-5 my-3'>
                <h3 style={{textAlign:"center", color:props.mode==='light' ? '#0d6efd' : 'whitesmoke'}}>Enter the text to analyze</h3>
            <textarea className="form-control" id="box" style={{backgroundColor:props.mode==='light' ? '#f9f9f9' : '#3e434b8a', color: props.mode==='dark'?'white':'#042743' }} rows="8" value={text} onChange={handleInput} ></textarea>

            <button className={`btn btn-outline-${props.mode==='light'?'primary':'light'} mt-2 btn-box-shadow-none`} onClick={handleUpClick} disabled={text.length===0} >Convert to UpperCase</button>
            <button className={`btn btn-outline-${props.mode==='light'?'primary':'light'} mt-2 mx-2`} onClick={handleLowClick} disabled={text.length===0} >Convert to LowerCase</button>
            <button className={`btn btn-outline-${props.mode==='light'?'primary':'light'} mt-2 mx-2`} onClick={handleCopyClick} disabled={text.length===0} >CopyText</button>
            <button className={`btn btn-outline-${props.mode==='light'?'primary':'light'} mt-2 mx-2`} onClick={handleRmvSpcClick} disabled={text.length===0} >Remove ExtraSpaces</button>
            <button className={`btn btn-${props.mode==='light'?'primary':'light'} mt-2 mx-2`} onClick={handleClearClick} disabled={text.length===0 } >ClearText</button>

        </div>
        <div className="my-5 mx-5 text-center" style={{color:props.mode==='light' ? '#0d6efd' : 'whitesmoke'}}>
        {text.length > 0 ? 
            <>
            <h4>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</h4>
            <p><strong>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</strong> per minutes required for reading</p>
            <h5>Preview</h5>
            <p>{text}</p>
            </>    
        :   <h4>Enter the text for Summary</h4>
        }    
        </div>
    </div>
    

  )
}

export default Function
