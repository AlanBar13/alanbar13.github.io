import React from "react";

const Contact = () => {
  return (
    <div className="contact container">
      <div className="row">
        <div className="col">
          <h1>Información de Contacto</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Me puedes encontrar en:</h3>
        </div>
      </div>

      <div className="contact1 row">
        <div className="col">
          <i className="fas fa-mobile-alt"></i> 4423977484
        </div>
      </div>
      <div className="contact2 row">
        <div className="col">
          <i className="fas fa-envelope"></i>{" "}
          <a href="mailto:alan.g.bardales@gmail.com">
            alan.g.bardales@gmail.com
          </a>
        </div>
      </div>
      <div className="contact3 row">
        <div className="col">
          <i class="fab fa-facebook-square icon"></i>
          <i class="fab fa-linkedin icon"></i>
          <i class="fab fa-twitter-square icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Contact;
