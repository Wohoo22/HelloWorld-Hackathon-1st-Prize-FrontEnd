import React from "react"

class Map2 extends React.Component{
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/file.js";
        script.async = true;

      
        document.body.appendChild(script);
      }
    render(){
        return <div><canvas id="myCanvas" height={600} width={600} style={{overflowX:"auto"}}></canvas></div>
    }
    
        
    
}

export default Map2