import React, {useState} from 'react'

export default function CreateMemo({addMemo}) {
const [inputMemo, setinputMemo] = useState({
    title:"",
    content:""
})

function handleChange(event){
    const{name,value}=event.target

    setinputMemo(prevValue=>{
        return{
            ...prevValue,
            [name]:value
        }
    })
}

function handleClik(){
    addMemo(inputMemo)
    setinputMemo({
        title:"",
        content:""
    })
}


    return (

<div className="create-memo">
    <input name="title" value={inputMemo.title}  onChange={handleChange} placeholder="Title..."></input>

    <textarea  name="content" value={inputMemo.content} onChange={handleChange} placeholder="Content..."></textarea>

    <button className="add-memo" onClick={handleClik}>Add</button>
</div>

  
    )
}
