import React from "react";

//Redux
import { connect } from "react-redux";

class Formation extends React.Component {
  render() {
    const language = this.props.language;
    if (language === "EN") {
      return (
        <div className="main container">
          <h2>Academic Formation</h2>
          <table className="table">
            <tbody>
              <tr style={{ textAlign: "start" }}>
                <td>2010-2015</td>
                <td>
                  B.S. Electronics and Computer Engineering ITESM Campus
                  Querétaro
                </td>
              </tr>
              <tr style={{ textAlign: "start" }}>
                <td>2014</td>
                <td>
                  영남대학교(Yeungnam University), South Korea, International
                  Exchange
                </td>
              </tr>
              <tr style={{ textAlign: "start" }}>
                <td>2007-2010</td>
                <td>High School at ITESM Campus Querétaro</td>
              </tr>
            </tbody>
          </table>
          <div className="pt-4 pb-4"></div>
          <h2>Professional Experience</h2>
          <table className="table">
            <tbody>
              <tr style={{ textAlign: "start" }}>
                <td>2017(Ene- )</td>
                <td>
                  <strong>IT Specialist (Tecnológico de Monterrey)</strong>
                  <br /> Development, maintenance and support to official
                  software, web pages and databases, as well as technical
                  support of the physical and virtual servers.
                </td>
              </tr>
              <tr style={{ textAlign: "start" }}>
                <td>2016(Sep- Ene)</td>
                <td>
                  <strong>IT Assistant (Tecnológico de Monterrey)</strong>
                  <br /> Technical support of audiovisual equipment, dealing
                  with person who needed technical support in the classrooms.
                </td>
              </tr>
              <tr style={{ textAlign: "start" }}>
                <td>2015(Feb-May)</td>
                <td>
                  <strong>
                    Intern in Electronics & Safety Area(CIDEC, Centro Técnico
                    Querétaro)
                  </strong>
                  <br /> Testing products in the automotive area. Infotaintent
                  products testing using tools like DOORS.
                </td>
              </tr>
              <tr style={{ textAlign: "start" }}>
                <td>2015(Ene-May)</td>
                <td>
                  <strong>
                    Centro de Apoyo al Desarrollo (CAD) Project in collaboration
                    with the company LiCore
                  </strong>
                  <br /> Project: Development and creation of a data acquisition
                  PMOD board along with the drivers for Xilinx technologies.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="main container">
          <h2>Formación académica</h2>
          <table className="table">
            <tbody>
              <tr style={{ textAlign: "start" }}>
                <td>2010-2015</td>
                <td>
                  Ingeniero en Tecnologías Electrónicas ITESM Campus Querétaro
                </td>
              </tr>
              <tr style={{ textAlign: "start" }}>
                <td>2014</td>
                <td>
                  Estudios en 영남대학교 (Yeungnam University), Corea del Sur,
                  Semestre de intercambio
                </td>
              </tr>
              <tr style={{ textAlign: "start" }}>
                <td>2007-2010</td>
                <td>Preaparatoria en ITESM Campus Querétaro</td>
              </tr>
            </tbody>
          </table>
          <div className="pt-4 pb-4"></div>
          <h2>Formación Profesional</h2>
          <table className="table">
            <tbody>
              <tr style={{ textAlign: "start" }}>
                <td>2017(Ene- )</td>
                <td>
                  <strong>
                    Especialista en Gestión de Tecnologías de Información
                    (Tecnológico de Monterrey)
                  </strong>
                  <br /> Mantenimiento y soporte a paginas web oficiales y base
                  de datos, de igual manera soporte a los servidores fisicos y
                  virtuales.
                </td>
              </tr>
              <tr style={{ textAlign: "start" }}>
                <td>2016(Sep- Ene)</td>
                <td>
                  <strong>
                    Auxiliar en Gestión de Tecnologías de Información
                    (Tecnológico de Monterrey)
                  </strong>
                  <br /> Soporte técnico de equipo audiovisual, de igual manera
                  trato con personas que requieren soporte tecnico en salones de
                  clase.
                </td>
              </tr>
              <tr style={{ textAlign: "start" }}>
                <td>2015(Feb-May)</td>
                <td>
                  <strong>
                    Practicante en el área de Electronics & Safety (CIDEC,
                    Centro Técnico Querétaro)
                  </strong>
                  <br /> Laborando en área de pruebas de productos automotrices.
                  Proyecto: Pruebas de productos electrónicos, utilizando
                  herramientas como DOORS.
                </td>
              </tr>
              <tr style={{ textAlign: "start" }}>
                <td>2015(Ene-May)</td>
                <td>
                  <strong>
                    Proyecto Centro de Apoyo al Desarrollo (CAD) en conjunto con
                    la empresa LiCore
                  </strong>
                  <br /> Proyecto: Desarrollo de controladores (en el lenguaje
                  VHDL) y elaboración de una tarjeta de adquisición de datos
                  para tarjetas Xilinx
                </td>
              </tr>
            </tbody>
          </table>
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

export default connect(mapStateToProps, {})(Formation);
