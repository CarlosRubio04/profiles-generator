import React from "react";

import ProfileForm from "../components/ProfileForm";
import ProfileDetail from "../components/ProfileDetail";
import SingInModal from '../components/SingInModal';
import Loader from "../components/Loader";

import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import firebase from "../firebase";

const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class ProfileEdit extends React.Component {
  state = {
    loading: true,
    loadingMessage: 'Loading ...',
    modalIsOpen: false,
    error: null,
    form: {
      cargo: "",
      nivel: "",
      area: "",
      cargosDependientes: "",
      cargoJefeInmediato: "",
      cargoAlReportar: "",
      educacion: "",
      experiencia: "",
      idiomas: "",
      conocimientoTecnico: "",
      ciudad: "",
      descripcion: ""
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true, error: null });
    const PROFILE_ID = this.props.match.params.profileId;
    const REF = firebase.database().ref("profiles/" + PROFILE_ID);

    REF.once("value")
      .then(snaptshot => {
        this.setState({
          loading: false,
          data: snaptshot.val(),
          form: snaptshot.val()
        });
      })
      .catch(error => {
        this.setState({ loading: false, error: error });
      });
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    const USER = firebaseAppAuth.currentUser;
    USER ? this.saveData(USER.uid) : this.handleOpenModal();
  };

  saveData = userId => {
    console.log(userId);
    this.setState({ loading: true, loadingMessage: 'Saving Data ...' });
    const REF = firebase.database().ref("users/" + userId + "/Collections");

    REF.push(this.state.form)
      .then(data => {
        this.setState({ loading: false });
        console.log("data ", data);
      })
      .catch(error => {
        this.setState({ loading: true, loadingMessage: 'Error saving data ...' });
        console.log("error ", error);
      });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  render() {
    if (this.state.loading) {
      return <Loader message={this.state.loadingMessage} />;
    }

    if (this.state.error) {
      return <h1 className="Color-Primary">{this.state.error}</h1>;
    }

    return (
      <div className="Main Bg-Primary-light">
        <div className="MainContainer">
          <div className="Row FlexBetween">
            <div className="Col4">
              <ProfileForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
            <div className="Col8">
              <ProfileDetail
                cargo={this.state.form.cargo}
                nivel={this.state.form.nivel}
                area={this.state.form.area}
                cargosDependientes={this.state.form.cargosDependientes}
                cargoJefeInmediato={this.state.form.cargoJefeInmediato}
                cargoAlReportar={this.state.form.cargoAlReportar}
                educacion={this.state.form.educacion}
                experiencia={this.state.form.experiencia}
                idiomas={this.state.form.idiomas}
                conocimientoTecnico={this.state.form.conocimientoTecnico}
                ciudad={this.state.form.ciudad}
                descripcion={this.state.form.descripcion}
              />
              <SingInModal
                  isOpen={this.state.modalIsOpen}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(ProfileEdit);
