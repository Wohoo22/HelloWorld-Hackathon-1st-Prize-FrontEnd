import React from "react";

class BigMap extends React.Component {
  componentDidMount() {
    const script2 = document.createElement("script");

    script2.src = "/bigmap.js";

    script2.async = true;

    document.body.appendChild(script2);
  }
  render() {
    return (
      <div>
        <canvas
          id="myCanvas2"
          height={1400}
          width={1400}
          style={{ overflowX: "auto" }}
        ></canvas>
      </div>
    );
  }
}

export default BigMap;
