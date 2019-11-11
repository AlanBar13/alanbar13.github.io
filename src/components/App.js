import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Hoja de estilos
import "../css/main.css";

//Componentes
import NavBar from "./NavBar";
import About from "./About";
import Formation from "./Formation";
import Projects from "./Projects";
import Main from "./Main";

//Redux
import { connect } from "react-redux";
import { getWidth, isMobile, isHidden } from "../actions";

class App extends React.Component {
  state = { width: 0, heigth: 0 };

  updateDimensions = () => {
    let w;
    w = window.innerWidth;
    this.props.getWidth(w);
    this.props.isMobile(w);
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    const { width } = this.props.window;
    let mobile = "";
    if (width < 500) {
      mobile = "mobile";
      this.props.isHidden("hidden");
    } else {
      mobile = "";
      this.props.isHidden("");
    }
    return (
      <BrowserRouter>
        <NavBar />
        <div
          className={`page-content ${mobile}`}
          onClick={() => {
            if (mobile === "mobile") {
              this.props.isHidden("hidden");
            }
          }}
        >
          <Route path="/" exact component={Main}></Route>
          <Route path="/formacion" component={Formation}></Route>
          <Route path="/acerca" component={About}></Route>
          <Route path="/proyectos" component={Projects}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    window: state.window
  };
};

export default connect(
  mapStateToProps,
  { getWidth, isMobile, isHidden }
)(App);
