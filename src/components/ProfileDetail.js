import React from "react";

import "./styles/ProfileDetail.scss";

class ProfileDetail extends React.Component {
  render() {
    return (
      <div className="ProfileDetail">
        <div className="ProfileDetailContainer">
          <div className="header">
            <span>{this.props.nivel}</span>
            <h1>{this.props.cargo}</h1>
          </div>
          <div className="body">
            <div className="description">
              <span>Descripción del cargo</span>
              <p>{this.props.descripcion}</p>
            </div>
            <div className="Row FlexBetween">
              <div className="Col5">
                <span>Cargos dependientes</span>
                <p>{this.props.cargosDependientes}</p>
              </div>
              <div className="Col5">
                <span>Cargo del jefe inmediato</span>
                <p>{this.props.cargoJefeInmediato}</p>
              </div>
            </div>

            <div className="Row FlexBetween">
              <div className="Col5">
                <span>Cargo al cual reporta</span>
                <p>{this.props.cargoAlReportar}</p>
              </div>
              <div className="Col5">
                <span>Area</span>
                <p>{this.props.area}</p>
              </div>
            </div>

            <div className="Row FlexBetween">
              <div className="Col5">
                <span>Ciudad</span>
                <p>{this.props.ciudad}</p>
              </div>
              <div className="Col5">
                <span>Educación</span>
                <p>{this.props.educacion}</p>
              </div>
            </div>

            <div className="Row FlexBetween">
              <div className="Col5">
                <span>Experiencia</span>
                <p>{this.props.experiencia}</p>
              </div>
              <div className="Col5">
                <span>Idiomas</span>
                <p>{this.props.idiomas}</p>
              </div>
            </div>
            <div className="Row FlexBetween">
              <div className="Col5">
                <span>Conocimiento técnico</span>
                <p>{this.props.conocimientoTecnico}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileDetail;
