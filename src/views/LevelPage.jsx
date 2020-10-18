import React, { useState } from 'react'
import BottomPage from '../components/BottomPage'
import NavBar from '../Navbar/NavBar'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import Tutorial from './Tutorial';
import Map from './Map';

const LevelPage = () => {
   const [value, setValue]=useState("")
    const [data,setData] = useState('')

    return (
        <div className="LevelPage">
            <NavBar></NavBar>
            <div className="PagePart">
              <div className="Leftpart">
                  
              <div className="TutorialPart"><div className="header">Tutorial</div>
              <div className="Text"><Tutorial></Tutorial></div>
                </div>
                <div className="CodeEditor"> 
                <textarea defaultValue={value} style={{width:"0px",height:"0px"}} id="codeInput"></textarea>
                <CodeMirror
  value={value}
  options={{
    mode: 'jsx',
    theme: 'material',
    lineNumbers: 30
  }}
  
  
  
  onChange={(editor, data, value) => {
    console.log(value, data)
    setValue(value)
    console.log(value);
  }
  }
/>

                </div>
              </div>
              <div className="RightPart" width="100%" style={{display:"flex", justifyContent:'center', alignItems:"center"}}>
                <Map></Map>
                 
              </div>
            </div>
            <BottomPage></BottomPage>
        </div>
    )
}

export default LevelPage
