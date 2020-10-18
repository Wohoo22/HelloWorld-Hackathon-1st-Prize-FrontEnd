import React from "react";
import "./App.css";
import HomePage from "./views/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import ExcercisePage from "./views/ExcercisePage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/level/:levelid">
          <ExcercisePage></ExcercisePage>
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
