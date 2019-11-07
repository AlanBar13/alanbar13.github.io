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
import { getWidth, getHeigth, isMobile } from "../actions";

class App extends React.Component {
  state = { width: 0, heigth: 0 };

  updateDimensions = () => {
    let w, h;
    w = window.innerWidth;
    h = window.innerHeight;
    this.props.getWidth(w);
    this.props.getHeigth(h);
    this.props.isMobile(w);
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  render() {
    const { width } = this.props.window;
    let mobile = "";
    if (width < 500) {
      mobile = "mobile";
    } else {
      mobile = "";
    }
    return (
      <BrowserRouter>
        <NavBar />
        <div className={`page-content ${mobile}`}>
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
  { getWidth, getHeigth, isMobile }
)(App);
