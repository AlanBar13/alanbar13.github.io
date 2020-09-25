import React from "react";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { isHidden, lanSelect } from "../actions";

class NavBar extends React.Component {
  componentDidMount() {
    if (this.props.mobile.m) {
      this.props.isHidden("hidden");
    }
  }
  hiddenHam() {
    if (this.props.mobile.m) {
      return "";
    } else {
      return "hidden";
    }
  }
  render() {
    let ham = this.hiddenHam();
    const language = this.props.language;
    var esActive, enActive;
    if (language === "ES") {
      esActive = "active";
      enActive = "";
    } else {
      esActive = "";
      enActive = "active";
    }
    return (
      <div>
        <div className={`py-4 px-3 hamburger ${ham}`}>
          <i
            className="fas fa-bars"
            style={{ color: "aliceblue" }}
            onClick={() => this.props.isHidden("")}></i>
        </div>
        <div
          className={`vertical-nav bg-white ${this.props.mobile.hidden}`}
          id="sidebar">
          <div className="buttons">
            <button
              className={`btn btn-outline-dark ${esActive}`}
              type="button"
              onClick={() => this.props.lanSelect("ES")}>
              ES
            </button>
            |
            <button
              type="button"
              className={`btn btn-outline-dark ${enActive}`}
              onClick={() => this.props.lanSelect("EN")}>
              EN
            </button>
          </div>
          <div className="py-4 px-3 mb-4 bg-light">
            <div className="media d-flex align-items-center">
              <Link to="/">
                <img
                  src="A01200363.jpg"
                  alt="..."
                  width="65"
                  className="mr-3 rounded-circle"></img>
              </Link>
              <div className="media-body">
                <h4 className="m-0">Alan Bardales</h4>
                <p className="font-weight-light text-muted mb-0">
                  {language === "EN"
                    ? "Computer and Electronic Engineer"
                    : "Ingeniero en Tecnologías Electrónicas"}
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
            MENU
          </p>
          <ul className="nav flex-column bg-white mb-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark font-italic bg-light">
                {language === "EN" ? "Home" : "Inicio"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/formacion"
                className="nav-link text-dark font-italic bg-light"
                onClick={() => this.props.isHidden("")}>
                {language === "EN" ? "Formation" : "Formación"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/proyectos"
                className="nav-link text-dark font-italic bg-light">
                {language === "EN" ? "Projects" : "Proyectos"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/acerca"
                className="nav-link text-dark font-italic bg-light">
                {language === "EN" ? "About Me" : "Acerca de mi"}
              </Link>
            </li>
          </ul>
          <p className="text-gray font-weight-bold text-uppercase px-3 py-4 small pb-4 mb-0">
            {language === "EN" ? "Contact" : "Contacto"}
          </p>
          <div className="bg-white info">
            <ul className="nav flex-column bg-white mb-5">
              <li
                className="nav-item"
                style={{ fontSize: 20, textAlign: "center" }}>
                <div className="nav-link text-dark bg-white">
                  <i className="fas fa-mobile-alt"></i> 4423977484
                </div>
              </li>
              <li
                className="nav-item"
                style={{ fontSize: 14, textAlign: "center" }}>
                <div className="nav-link text-dark bg-white">
                  <i className="fas fa-envelope"></i>{" "}
                  <a href="mailto:alan.g.bardales@gmail.com">
                    alan.g.bardales@gmail.com
                  </a>
                </div>
              </li>
              <li
                className="nav-item"
                style={{ fontSize: 25, textAlign: "center" }}>
                <div className="nav-link text-dark bg-white">
                  <a
                    href="https://www.linkedin.com/in/alan-bardales"
                    className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/AlanBar13" className="icon">
                    <i className="fab fa-github-square"></i>
                  </a>
                  <a href="/AlanCV_EN2020.pdf" className="icon">
                    <i className="fas fa-file-pdf"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    window: state.window,
    mobile: state.mobile,
    language: state.language,
  };
};

export default connect(mapStateToProps, { isHidden, lanSelect })(NavBar);
