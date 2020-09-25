import React from "react";

//Redux
import { connect } from "react-redux";

class Projects extends React.Component {
  render() {
    const language = this.props.language;
    if (language === "EN") {
      return (
        <div className="main container-fluid">
          <h2>Developed Projects</h2>
          <div className="row">
            <div className="col-sm">
              <div className="card card-text h-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Development of web application for Tecnologico de Monterrey
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    2017(Ago-Sep)
                  </h6>
                  <p className="card-text">
                    Project: Development of registration website for the
                    inauguration event of the new Borregos Stadium. The page was
                    programmed with ASP.NET technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card card-text h-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Collaboration in the development of a mobile aplication
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    2017(Ago-Dic)
                  </h6>
                  <p className="card-text">
                    Project: Working in collaboration with the company Zeldatec.
                    We develop a platform for a taxi company, similar to Uber
                    app, using Jquery Mobile.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card card-text h-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Development of a mobile and web application (BuSo) for the
                    Tecnologico de Monterrey
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    2018(Ene-Abr)
                  </h6>
                  <p className="card-text">
                    Project: Using the technology of Jquery Mobile, an
                    application is being developed to promote the services of
                    the IT area, such as the software in agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm">
              <div className="card card-text h-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Website development and monitoring of advertising campaign
                    for INEM company
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">En curso</h6>
                  <p className="card-text">
                    Project: Website design (technology used React) and initial
                    advertising campaign for the company INEM
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card card-text h-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    BuSo page update for Tec de Monterrey
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">En curso</h6>
                  <p className="card-text">
                    Project: Development of the BuSo page update, where modern
                    web development tools such as React and Redux were used.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card card-text h-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Creation and development of vendor management application
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">En curso</h6>
                  <p className="card-text">
                    Project: Initial design of platform for sellers of the
                    company FSCA SA. Technology to use React, Redux and SQL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="main container-fluid">
          <h2>Proyectos Desarrollados</h2>
          <div className="row">
            <div className="col-sm">
              <div className="card card-text h-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Desarrollo de pagina web para evento del Tecnologico de
                    Monterrey
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    2017(Ago-Sep)
                  </h6>
                  <p className="card-text">
                    Proyecto: Desarrollo de pagina web de registro para evento
                    de inaguracion del nuevo Estadio Borregos. La pagina fue
                    programada con la tecnologia de ASP.NET.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card card-text h-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Colaboracion en Desarrollo de aplicación movil
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    2017(Ago-Dic)
                  </h6>
                  <p className="card-text">
                    Proyecto: Se trabajo en colaboracion con la empresa
                    Zeldatec, para el desarrollo de plataformas para una empresa
                    de taxis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card card-text h-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Desarrollo de aplicación movil para el Tecnologico de
                    Monterrey
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    2018(Ene-Abr)
                  </h6>
                  <p className="card-text">
                    Proyecto: Utilizando la tecnologia de Jquery Mobile, se esta
                    desarrollando una aplicación para promover los servicios del
                    area de TI, como son el software en convenio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm">
              <div className="card card-text h-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Desarrollo de pagina web y seguimiento de campaña de
                    publicidad para empresa INEM
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">En curso</h6>
                  <p className="card-text">
                    Proyecto: Diseño de pagina web (tecnología utilizada React)
                    y campaña de publicidad inicial para la empresa INEM
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card card-text h-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Actualización de pagina BuSo para el Tec de Monterrey
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">En curso</h6>
                  <p className="card-text">
                    Proyecto: Desarrollo de la actualización de la pagina de
                    BuSo, en donde se utilizaron herramientas de desarrollo web
                    modernas como es React y Redux.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card card-text h-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Creación y desarrollo de aplicación de manejo de vendedores
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">En curso</h6>
                  <p className="card-text">
                    Proyecto: Diseño inicial de plataforma para vendedores de la
                    empresa FSCA SA. Tecnología a utilizar React, Redux y SQL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

export default connect(mapStateToProps, {})(Projects);
