import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import BottomPage from "../components/BottomPage";

import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import BigMap from "./BigMap";

const FinalPage = () => {
  const [value, setValue] = useState("");
  return (
    <div className="FinalPage">
      <NavBar></NavBar>
      <div
        className="PagePart"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "2fr 1fr",
        }}
      >
        <div
          className="RightPart"
          width="100%"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BigMap></BigMap>
        </div>

        <div className="CodeEditor">
          <textarea
            defaultValue={value}
            style={{ width: "0px", height: "0px" }}
            id="codeInput"
          ></textarea>
          <CodeMirror
            value={value}
            options={{
              mode: "jsx",
              theme: "material",
              lineNumbers: 30,
            }}
            onChange={(editor, data, value) => {
              console.log(value, data);
              setValue(value);
              console.log(value);
            }}
          />
        </div>
      </div>
      <BottomPage></BottomPage>
    </div>
  );
};

export default FinalPage;
