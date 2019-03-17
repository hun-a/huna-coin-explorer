import { Component } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const baseStyles = () => createGlobalStyle`
  ${reset}
`;

class App extends Component {
  render() {
    baseStyles();
    return null;
  }
}

export default App;