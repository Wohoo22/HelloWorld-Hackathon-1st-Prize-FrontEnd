import React from 'react'
import { useParams } from "react-router-dom";
import LevelPage from "./LevelPage"
import IntroductionPage from "./IntroductionPage"
import FinalPage from './FinalPage';

const ExcercisePage = () => {
    const {levelid} = useParams()
 
    return (
        <div className="ExcercisePage">
            {parseInt(levelid)===0&&
          <IntroductionPage></IntroductionPage>
        }
             {parseInt(levelid)<10 && parseInt(levelid)>0 &&
          <LevelPage></LevelPage>
       }
         {parseInt(levelid)===10 &&
          <FinalPage></FinalPage>
       }
        </div>
    )
}

export default ExcercisePage
