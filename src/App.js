import React, { Component } from "react";
import "./App.css";
import Quote from "./Components/Quotes";

import { Provider } from "react-redux";
import { store } from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Quote />
        </div>
      </Provider>
    );
  }
}

export default App;
