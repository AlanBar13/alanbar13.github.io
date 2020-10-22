import React from "react";

//Redux
import { connect } from "react-redux";

class About extends React.Component {
  render() {
    const language = this.props.language;
    if (language === "EN") {
      return (
        <div className="main container">
          <h3>Technical Skills And Knowledge</h3>
          <table className="table">
            <thead>
              <tr className="row m-0">
                <th className="col-4">Programming languages:</th>
                <th className="col-4">Web development Oriented:</th>
                <th className="col-4">Software Knowledge of:</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row m-0">
                <td className="col-4">C</td>
                <td className="col-4">HTML, Javascript, CSS</td>
                <td className="col-4">GitHub</td>
              </tr>
              <tr className="row m-0">
                <td className="col-4">Python</td>
                <td className="col-4">Node.js</td>
                <td className="col-4">Android SDK / iOS</td>
              </tr>
              <tr className="row m-0">
                <td className="col-4">Java</td>
                <td className="col-4">SQL / MySQL / MongoDB</td>
                <td className="col-4">Cloud Platforms (Huawei Cloud, AWS)</td>
              </tr>
              <tr className="row m-0">
                <td className="col-4">Shell</td>
                <td className="col-4">PHP</td>
                <td className="col-4">Docker (Basic knowledge)</td>
              </tr>
            </tbody>
          </table>
          <h3>Courses and Trainings</h3>
          <ul
            className="list-group"
            style={{ color: "#173d85", textAlign: "start" }}>
            <li className="list-group-item">
              Curso: iOS 13 & Swift 5 - The Complete iOS App Development
              Bootcamp (In progress),(Udemy)
            </li>
            <li className="list-group-item">
              Course: Modern Web Development with React and Redux [2019 Upate],
              (Udemy)
            </li>
            <li className="list-group-item">
              Course: 20703-1 Administering System Center Configuration Manager,
              (ExecuTrain) obtaining a certificate of completion of the course.
            </li>
            <li className="list-group-item">
              Course: Python Scripting for Software Testers,(Udemy) obtaining a
              certificate of completion of the course.
            </li>
            <li className="list-group-item">
              Course: MacOs Support Essentials 10.13 y 10.12, (EduMac) obtaining
              a certificate of completion of the course.
            </li>
            <li className="list-group-item">
              Course: Xamarin.Android, obtaining a certificate of participation.
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="main container">
          <h3>Habilidades Técnicas y Conocimiento</h3>
          <table className="table">
            <thead>
              <tr className="row m-0">
                <th className="col-4">Lenguajes de Programación:</th>
                <th className="col-4">Orientadas a desarrollo web:</th>
                <th className="col-4">Trabajado con:</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row m-0">
                <td className="col-4">C</td>
                <td className="col-4">HTML, Javascript, CSS</td>
                <td className="col-4">Git</td>
              </tr>
              <tr className="row m-0">
                <td className="col-4">Python</td>
                <td className="col-4">Node.js</td>
                <td className="col-4">Android SDK / iOS</td>
              </tr>
              <tr className="row m-0">
                <td className="col-4">Java</td>
                <td className="col-4">SQL / MySQL / MongoDB</td>
                <td className="col-4">Cloud Platforms (Huawei Cloud, AWS)</td>
              </tr>
              <tr className="row m-0">
                <td className="col-4">Shell</td>
                <td className="col-4">React.js</td>
                <td className="col-4">Docker (Conocimiento basico)</td>
              </tr>
            </tbody>
          </table>
          <h3>Cursos y Certificaciones</h3>
          <ul
            className="list-group"
            style={{ color: "#173d85", textAlign: "start" }}>
            <li className="list-group-item">
              Curso: iOS 13 & Swift 5 - The Complete iOS App Development
              Bootcamp (In progress),(Udemy)
            </li>
            <li className="list-group-item">
              Curso: Modern Web Development with React and Redux [2019 Upate]
              (Udemy)
            </li>
            <li className="list-group-item">
              Curso: 20703-1 Administering System Center Configuration Manager,
              (ExecuTrain) obteniendo un certificado de finalizacion del curso
            </li>
            <li className="list-group-item">
              Curso: MacOs Support Essentials 10.13 y 10.12, (EduMac) obteniendo
              un certificado de finalizacion del curso
            </li>
            <li className="list-group-item">
              Curso: Python Scripting for Software Testers, (Udemy) obteniendo
              un certificado de finalizacion del curso.
            </li>
            <li className="list-group-item">
              Curso: Xamarin.Android, obteniendo un certificado de participación
            </li>
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
  };
};

export default connect(mapStateToProps, {})(About);
