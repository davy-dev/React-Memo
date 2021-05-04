import React, {useState} from "react"
import CreateMemo from "./CreateMemo"
import Header from "./Header"
import Memo from "./Memo"
import Footer from "./Footer"
import "../styles.css"



function App() {
const [memo, setmemo] = useState([])

function sendMemo(memo){
  setmemo(prevmemo=>{
    return[...prevmemo,memo]
  })
}

function deleteMemo (id){

  setmemo(()=>{
    return memo.filter((e,index)=>{
      return index!==id
    })
  })

}

  return (
    <div className="App">
     <Header/>
     <CreateMemo addMemo={sendMemo} />

    <div className="memo-usher">

    {memo.map((text,index)=>{
      return <Memo 
       key={index}
       id={index}
       text={text}
       onChecked={deleteMemo}
      />
    })}

    </div>
     <Footer />
    </div>
  );
}

export default App;
