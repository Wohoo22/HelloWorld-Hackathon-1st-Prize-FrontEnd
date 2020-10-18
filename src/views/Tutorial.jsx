import React from 'react'
import { useParams } from 'react-router-dom'

const Tutorial = () => {
    const {levelid} = useParams()
    

    return (
        <div className="Tutorial">
            {
                parseInt(levelid) ===1 && <div><p>The console is a panel that displays important messages, like errors, for developers. Much of the work the computer does with our code is invisible to us by default. If we want to see things appear on our screen, we can print, or log, to our console directly.</p>
                <p>In JavaScript, the console keyword refers to an object, a collection of data and actions, that we can use in our code. Keywords are words that are built into the JavaScript language, so the computer will recognize them and treats them specially.

                </p>
                <p>
                   One action, or method, that is built into the console object is the .log() method. When we write console.log() what we put inside the parentheses will get printed, or logged, to the console.  
                </p>
                
               
                
                <p>It’s going to be very useful for us to print values to the console, so we can see the work that we’re doing.</p></div>
            }
           
        </div>
    )
}

export default Tutorial
