import React from "react";

const Projects = () => {
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
              <h6 className="card-subtitle mb-2 text-muted">2017(Ago-Sep)</h6>
              <p className="card-text">
                Proyecto: Desarrollo de pagina web de registro para evento de
                inaguracion del nuevo Estadio Borregos. La pagina fue programada
                con la tecnologia de ASP.NET.
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
              <h6 className="card-subtitle mb-2 text-muted">2017(Ago-Dic)</h6>
              <p className="card-text">
                Proyecto: Se trabajo en colaboracion con la empresa Zeldatec,
                para el desarrollo de plataformas para una empresa de taxis.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card card-text h-100" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                Desarrollo de aplicación movil para el Tecnologico de Monterrey
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">2018(Ene-Abr)</h6>
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
                Desarrollo de pagina web y seguimiento de campaña de publicidad
                para empresa INEM
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">En curso</h6>
              <p className="card-text">
                Proyecto: Diseño de pagina web (tecnología utilizada React) y
                campaña de publicidad inicial para la empresa INEM
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
                Proyecto: Desarrollo de la actualización de la pagina de BuSo,
                en donde se utilizaron herramientas de desarrollo web modernas
                como es React y Redux.
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
};

export default Projects;
