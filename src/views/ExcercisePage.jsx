import React from 'react'
import { useParams } from "react-router-dom";
import LevelPage from "./LevelPage"
import IntroductionPage from "./IntroductionPage"

const ExcercisePage = () => {
    const {levelid} = useParams()
 
    return (
        <div className="ExcercisePage">
            {parseInt(levelid)===0&&
          <IntroductionPage></IntroductionPage>
        }
             {parseInt(levelid)>0 &&
          <LevelPage></LevelPage>
       }
        
        </div>
    )
}

export default ExcercisePage
