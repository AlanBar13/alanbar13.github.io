import React from "react";

const About = () => {
  return (
    <div className="main container">
      <h3>Habilidades Técnicas y Conocimiento</h3>
      <table className="table">
        <thead>
          <tr className="row m-0">
            <th className="col-4">Lenguajes de Programación</th>
            <th className="col-4">Orientadas a desarrollo web:</th>
            <th className="col-4">Manejo de Software como:</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row m-0">
            <td className="col-4">C (intermedio)</td>
            <td className="col-4">Node.js, JSX, Javascript</td>
            <td className="col-4">GitHub</td>
          </tr>
          <tr className="row m-0">
            <td className="col-4">VHDL(intermedio)</td>
            <td className="col-4">PHP</td>
            <td className="col-4">Labview</td>
          </tr>
          <tr className="row m-0">
            <td className="col-4">C++ (intermedio)</td>
            <td className="col-4">SQL / MySQL</td>
            <td className="col-4">Android SDK y Xamarin</td>
          </tr>
          <tr className="row m-0">
            <td className="col-4">Python (básico)</td>
            <td className="col-4">ASP / ASP.NET</td>
            <td className="col-4">Azure / AWS</td>
          </tr>
        </tbody>
      </table>
      <h3>Cursos y Certificaciones</h3>
      <ul
        className="list-group"
        style={{ color: "#173d85", textAlign: "start" }}
      >
        <li className="list-group-item">
          Cursos: Xamarin.Android obteniendo un certificado de participación (En
          proceso Xamarin.ios)
        </li>
        <li className="list-group-item">
          Curso: Python Scripting for Software Testers, en la plataforma de
          Udemy obteniendo un certificado de finalizacion del curso.
        </li>
        <li className="list-group-item">
          Curso: Moder Web Development with React and Redux [2019 Upate] (En
          Curso), Udemy obteniendo un certificado de finalizacion del curso
        </li>
        <li className="list-group-item">
          Curso: 20703-1 Administering System Center Configuration Manager,
          ExecuTrain obteniendo un certificado de finalizacion del curso
        </li>
        <li className="list-group-item">
          Curso: MacOs Support Essentials 10.13 y 10.12, EduMac obteniendo un
          certificado de finalizacion del curso
        </li>
      </ul>
    </div>
  );
};

export default About;
