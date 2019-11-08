import React from "react";

//Redux
import { connect } from "react-redux";

class Main extends React.Component {
  render() {
    const isMobile = this.props.mobile.m;
    if (isMobile) {
      return (
        <div className="main container">
          <div className="row justify-content-center">
            <h1>Alan Gustavo Bardales Mendoza</h1>
          </div>

          <div className="row justify-content-center">
            <h2>
              "Ingeniero en Tecnologías Electrónicas, emprendedor, lider,
              apasionado. Entusiasta de la tecnología, los conciertos y la
              música"
            </h2>
          </div>
          <div className="row justify-content-center">
            <h3>Resumen:</h3>
            <p>
              Una persona apasionada por la tecnología, confiable, eficiente y
              con excelentes habilidades de liderazgo y trabajo en equipo. Tengo
              el interés de crecer en este ámbito y desarrollar todo mi
              potencial. Mi meta es crear y desarrollar sistemas que ayuden a
              las personas en su vida diaria.
            </p>
          </div>

          <div className="row justify-content-center main-list">
            <ul className="list-group" style={{ color: "#173d85" }}>
              <li className="list-group-item">Sistemas Embebidos</li>
              <li className="list-group-item">Desarrollo Web</li>
              <li className="list-group-item">Produccion musical</li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="main container">
          <div className="row justify-content-center main-head">
            <div className="col-4">
              <h1>Alan Gustavo Bardales Mendoza</h1>
            </div>
            <div className="col-4"></div>
          </div>

          <div className="row justify-content-end main-lema">
            <div className="col-6">
              <h2>
                "Ingeniero en Tecnologías Electrónicas, emprendedor, lider,
                apasionado. Entusiasta de la tecnología, los conciertos y la
                música"
              </h2>
            </div>

            <div className="row justify-content-start main-resumen">
              <div className="col-6">
                <h3>Resumen:</h3>
                <p>
                  Una persona apasionada por la tecnología, confiable, eficiente
                  y con excelentes habilidades de liderazgo y trabajo en equipo.
                  Tengo el interés de crecer en este ámbito y desarrollar todo
                  mi potencial. Mi meta es crear y desarrollar sistemas que
                  ayuden a las personas en su vida diaria.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-end main-list">
            <div className="col-6">
              <h4>Areas de Interes:</h4>
              <ul className="list-group" style={{ color: "#173d85" }}>
                <li className="list-group-item">Sistemas Embebidos</li>
                <li className="list-group-item">Desarrollo Web</li>
                <li className="list-group-item">Produccion musical</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStatToProps = state => {
  return {
    mobile: state.mobile
  };
};

export default connect(
  mapStatToProps,
  {}
)(Main);
