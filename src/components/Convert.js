import React, { useState } from 'react'

export default function Convert(props) {

    function UPPER() {

        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text has been changed to Uppercase !", "success")
    }

    //! have to read
    const copy = ()=>{
        // var text = document.getElementById("my-box");
        // text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges()
        props.showAlert("Copied to Clipboard", "success");
    }
    function lower() {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text has been changed to Lowercase !", "success")

    }
    function clear() {
        setText("")
        props.showAlert("Text has been cleared !", "success")

    }
    // function mix (){
    //     let array = text.split(" ")
    //     let finalArray = []
    //     let arrayElement = array.map(word=>{
    //         let newArray = word.split("")
    //         let upperCaseElement =  newArray[0].toUpperCase()
    //         newArray.splice(0,1,upperCaseElement)
    //         let joined = newArray.join('')
    //         finalArray.push(joined)
    //     })
    //     let mix = finalArray.join(' ')
    //     setText(mix)
    // }

    function CamelCase() {

        if (text.split(" ")[0] === "") {    //! important to Understand
            setText("provide Text first!")
        }
        else {
            let upperCaseElement = text.split(' ')[0].split('')[0].toUpperCase()
            let firstElement = text.split(' ')[0].split('')[0]
            let newText = text.replace(firstElement, upperCaseElement)
            setText(newText)
        }
    }

    // counting words in TextArea
    // let NoOfWord = 0
    // const CountWords = (text)=>{
    //     let count = text.split(' ')
    //     for(let e of count){
    //         if(e.split(' ') !==  "" && e.split("").length > 0){
    //             NoOfWord++
    //         }
    //     }
    //     return NoOfWord
    // }

    // counting charactera in TextArea

    // let NoOfChar = 0
    // const CountChar = (text) =>{
    //     let array = text.split('')
    //     for(let char of array){
    //         if(char !== " "){
    //             NoOfChar++
    //         }
    //     }
    //     return NoOfChar
    // }

    const [text, setText] = useState('')

    return (

        <div className={`container`} style={{ color: props.text }}>
            <h1 >Enter some text to convert</h1>
            {/* Input gets error in console while writing text in input , why? */}
            {/* <input type="text" name="" id="" placeholder='Enter text' value={text} onChange={(event) => setText(event.target.value)} /> */}
            <div  >
                <textarea id='my-box' className={`form-control bg-${props.textArea} text-${props.text}`} rows="8" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text here....'></textarea>
            </div>
            <br />

            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={UPPER}>UPPERCASE</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={lower}>lowercase</button>
            <button disabled={text.length === 0} className='btn btn-outline-danger mx-1 my-1' onClick={clear}> clear </button>
            <button disabled={text.length === 0} className='btn btn-outline-secondary mx-1 my-1' onClick={CamelCase}>Camelcase </button>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={copy}>Copy </button>

            <h1 className='mt-5'>Your Text summary</h1>
            <div className="container">
                <p className={`bg-${props.textArea} text-${props.text}`}>
                    {text.split(/\s+/).filter((element) => { return element.length > 0 }).length} words and {text.split("").filter((element) => { return element !== " " }).length} characters
                </p>
                <div className={`container bg-${props.textArea} text-${props.text}`}>
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length > 0 }).length} minutes to read</p>
                </div>
            </div>
            <h2>Preview</h2>
            <div className={`container`} style={{ color: text.length > 0 ? "#a3f06c" : "#f01411" }}>
                <p>{text.length > 0 ? text : "Enter Your text to preview !"}</p>
            </div>
        </div>
    )
}
// (/\s+/) regular expression
