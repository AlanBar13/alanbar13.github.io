import React from "react";

const Projects = () => {
  return (
    <div className="main container-fluid">
      <h2>Proyectos Desarrollados</h2>
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr className="row m-0">
              <th className="d-inline-block col-4">2017(Ago-Sep)</th>
              <th className="d-inline-block col-4">2017(Ago-Dic)</th>
              <th className="d-inline-block col-4">2018(Ene-Abr)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row m-0" style={{ textAlign: "start" }}>
              <td className="d-inline-block col-4">
                <strong>
                  Desarrollo de aplicación movil para el Tecnologico de
                  Monterrey
                </strong>
                <br />
                Proyecto: Utilizando la tecnologia de Jquery Mobile, se esta
                desarrollando una aplicación para promover los servicios del
                area de TI, como son el software en convenio.
              </td>
              <td className="d-inline-block col-4">
                <strong>Colaboracion en Desarrollo de aplicación movil</strong>
                <br /> Proyecto: Se trabajo en colaboracion con la empresa
                Zeldatec, para el desarrollo de plataformas para una empresa de
                taxis.
              </td>
              <td className="d-inline-block col-4">
                <strong>
                  Desarrollo de pagina web para evento del Tecnologico de
                  Monterrey
                </strong>
                <br /> Proyecto: Desarrollo de pagina web de registro para
                evento de inaguracion del nuevo Estadio Borregos. La pagina fue
                programada con la tecnologia de ASP.NET.
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr className="row m-0">
              <th className="d-inline-block col-4">En Curso</th>
              <th className="d-inline-block col-4">En Curso</th>
              <th className="d-inline-block col-4">En Curso</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row m-0" style={{ textAlign: "start" }}>
              <td className="d-inline-block col-4">
                <strong>
                  Desarrollo de pagina web y seguimiento de campaña de
                  publicidad para empresa INEM
                </strong>
                <br />
                Proyecto: ...
              </td>
              <td className="d-inline-block col-4">
                <strong>
                  Actualización de pagina BuSo para el Tec de Monterrey
                </strong>
                <br /> Proyecto: ...
              </td>
              <td className="d-inline-block col-4">
                <strong>
                  Creación y desarrollo de aplicación de manejo de vendedores
                </strong>
                <br /> Proyecto: ...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
