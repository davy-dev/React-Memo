import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function Memo({key,id,text,onChecked}) {
    return (
        <div key={key} id={id} className="memo">
             <p>{text.title}</p>
             <p>{text.content}</p>

                <button onClick={()=>onChecked(id)} className="delete"><DeleteForeverIcon style={{fontSize:50}}/></button>
        </div>
    )
}
