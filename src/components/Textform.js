import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","succes")
    }

    const handleLoClick = () => {
        console.log("Lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","succes")
    }
    const handleClearClick = () => {
        console.log("Clear Text was Clicked" + text);
        let newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        console.log("Text Copied");
        let newText = 'Text Copied';
        setText(newText);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed","succes")
    }

    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'White':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== `dark`?`grey`:`white` , color: props.mode==='dark'?'White':'black'}} id="myBox" rows="5"></textarea>
                </div>
                <div>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'White':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} Average Minutes to Read a paragraph</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your text to Preview Here"}</p>
            </div>
        </>
    )
}