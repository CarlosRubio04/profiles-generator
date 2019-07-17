import React from 'react';
import './styles/ProfileForm.scss'

class ProfileForm extends React.Component {

    handleClick = e => {
        console.log('clicked')
    }

    render() {
        return (
            <div className="Form">
                <div className="FormContainer">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="FormGroup">
                            <label>Cargo</label>
                            <input 
                                type="text"
                                name="cargo"
                                className="formControl"
                                onChange={this.props.onChange}
                                value={this.props.formValues.cargo}
                            />
                        </div>
                        <div className="FormGroup">
                            <label>Nivel</label>
                            <input 
                                type="text"
                                name="nivel"
                                className="formControl"
                                onChange={this.props.onChange}
                                value={this.props.formValues.nivel}
                            />
                        </div>
                        <div className="FormGroup">
                            <label>Area</label>
                            <input 
                                type="text"
                                name="area"
                                className="formControl"
                                onChange={this.props.onChange}
                                value={this.props.formValues.area}
                            />
                        </div>
                        <div className="FormGroup">
                            <label>Cargos Deoendientes</label>
                            <input 
                                type="text"
                                name="cargosDependientes"
                                className="formControl"
                                onChange={this.props.onChange}
                                value={this.props.formValues.cargosDependientes}
                            />
                        </div>
                        <div className="FormGroup">
                            <label>Cargo del Jefe Inmediato</label>
                            <input 
                                type="text"
                                name="cargoJefeInmediato"
                                className="formControl"
                                onChange={this.props.onChange}
                                value={this.props.formValues.cargoJefeInmediato}
                            />
                        </div>
                        <div className="FormGroup">
                            <label>Cargo al que reporta</label>
                            <input 
                                type="text"
                                name="cargoAlReportar"
                                className="formControl"
                                onChange={this.props.onChange}
                                value={this.props.formValues.cargoAlReportar}
                            />
                        </div>
                        <div className="FormGroup">
                            <label>Educación</label>
                            <input 
                                type="text"
                                name="educacion"
                                className="formControl"
                                onChange={this.props.onChange}
                                value={this.props.formValues.educacion}
                            />
                        </div>
                        <div className="FormGroup">
                            <label>Experiencia</label>
                            <input 
                                type="text"
                                name="experiencia"
                                className="formControl"
                                onChange={this.props.onChange}
                                value={this.props.formValues.experiencia}
                            />
                        </div>
                        <div className="FormGroup">
                            <label>Idiomas</label>
                            <input 
                                type="text"
                                name="idiomas"
                                className="formControl"
                                onChange={this.props.onChange}
                                value={this.props.formValues.idiomas}
                            />
                        </div>
                        <div className="FormGroup">
                            <label>Conocimiento técnico</label>
                            <input 
                                type="text"
                                name="conocimientoTecnico"
                                className="formControl"
                                onChange={this.props.onChange}
                                value={this.props.formValues.conocimientoTecnico}
                            />
                        </div>
                        <div className="FormGroup">
                            <label>Ciudad</label>
                            <input 
                                type="text"
                                name="ciudad"
                                className="formControl"
                                onChange={this.props.onChange}
                                value={this.props.formValues.ciudad}
                            />
                        </div>
                        <div className="FormGroup">
                            <label>Descripción</label>
                            <textarea 
                                name="descripcion"
                                className="formControl" 
                                rows="5"
                                onChange={this.props.onChange}
                                value={this.props.formValues.descripcion}
                            ></textarea>
                        </div>
                        <div className="FormSubmit">
                            <button onClick={this.handleClick} className="Text-Button Button Button-Secondary-Dark">
                                Save
                            </button>       
                        </div>
                        {this.props.error && (
                            <p className="text-danger">{this.props.error.message}</p>
                        )}
                    </form>
                </div>
            </div>
        )
    }
}

export default ProfileForm;