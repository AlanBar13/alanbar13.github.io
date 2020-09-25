import React from "react";

//Redux
import { connect } from "react-redux";

class Main extends React.Component {
  render() {
    const isMobile = this.props.mobile.m;
    const language = this.props.language;
    if (language === "EN") {
      if (isMobile) {
        return (
          <div className="main container">
            <div className="row justify-content-center">
              <h1>Alan Gustavo Bardales Mendoza</h1>
            </div>

            <div className="row justify-content-center">
              <h2>
                "Computer and Electronic Engineer, entrepreneur, leader,
                passionate. Enthusiast of technology, concerts and music"
              </h2>
            </div>
            <div className="row justify-content-center">
              <h3>Summary:</h3>
              <p>
                A person passionate about technology, reliable, efficient and
                with excellent leadership and teamwork skills. I am interested
                in growing in this area and developing my full potential. My
                goal is to create and develop systems that help people in their
                daily lives.
              </p>
            </div>

            <div className="row justify-content-center main-list">
              <h4>Areas of interest:</h4>
              <ul className="list-group" style={{ color: "#173d85" }}>
                <li className="list-group-item">Embedded Systems</li>
                <li className="list-group-item">Web Develpment</li>
                <li className="list-group-item">Musical Production</li>
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
                  "Computer and Electronic Engineer, entrepreneur, leader,
                  passionate. Enthusiast of technology, concerts and music"
                </h2>
              </div>

              <div className="row justify-content-start main-resumen">
                <div className="col-6">
                  <h3>Summary:</h3>
                  <p>
                    A person passionate about technology, reliable, efficient
                    and with excellent leadership and teamwork skills. I am
                    interested in growing in this area and developing my full
                    potential. My goal is to create and develop systems that
                    help people in their daily lives.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-end main-list">
              <div className="col-6">
                <h4>Areas of interest:</h4>
                <ul className="list-group" style={{ color: "#173d85" }}>
                  <li className="list-group-item">Embedded Systems</li>
                  <li className="list-group-item">Web Develpment</li>
                  <li className="list-group-item">Musical Production</li>
                </ul>
              </div>
            </div>
          </div>
        );
      }
    } else {
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
                con excelentes habilidades de liderazgo y trabajo en equipo.
                Tengo el interés de crecer en este ámbito y desarrollar todo mi
                potencial. Mi meta es crear y desarrollar sistemas que ayuden a
                las personas en su vida diaria.
              </p>
            </div>

            <div className="row justify-content-center main-list">
              <h4>Areas de Interes:</h4>
              <ul className="list-group" style={{ color: "#173d85" }}>
                <li className="list-group-item">Sistemas Embebidos</li>
                <li className="list-group-item">Desarrollo Web</li>
                <li className="list-group-item">Producción musical</li>
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
                    Una persona apasionada por la tecnología, confiable,
                    eficiente y con excelentes habilidades de liderazgo y
                    trabajo en equipo. Tengo el interés de crecer en este ámbito
                    y desarrollar todo mi potencial. Mi meta es crear y
                    desarrollar sistemas que ayuden a las personas en su vida
                    diaria.
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
                  <li className="list-group-item">Producción musical</li>
                </ul>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

const mapStatToProps = state => {
  return {
    mobile: state.mobile,
    language: state.language
  };
};

export default connect(mapStatToProps, {})(Main);
