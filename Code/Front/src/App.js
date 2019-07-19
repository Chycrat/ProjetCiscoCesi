import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ip : "127.0.0.1",
      port : 3000,
      username : "",
      password : ""
    }
  }
  login = () => {
    axios.post('http://10.1.1.1/api/cossh/', {
      ip: this.state.ip,
      port: this.state.port,
      username: this.state.username,
      password: this.state.password
    }).then((result) => {
      if(result.data.data.ssh == false){
        document.getElementById('error-ip').style.opacity = 1;
      }else{
        sessionStorage.setItem('ip', this.state.ip);
        sessionStorage.setItem('port', this.state.port);
        sessionStorage.setItem('username', this.state.username);
        this.props.history.push('/status');
      }
    });
  }
  handleChangeIP(event) { this.setState({ip: event.target.value});}
  handleChangePort(event) { this.setState({port: event.target.value});}
  handleChangeUsername(event) { this.setState({username: event.target.value});}
  handleChangePassword(event) { this.setState({password: event.target.value});}

  render() {
    return (
      <div className="App">
        <div class="ui middle aligned center aligned grid container-login-form">
          <div class="column sub-container-login-form">
            <div class="ui large form">
              <div class="ui stacked segment">
                <h2 class="ui teal image header">
                  <img src="./assets/images/logo.png" class="image brand-image-login" />
                  <div class="content brand-title-login">
                    web interface
                  </div>
                </h2>
                <div class="field">
                  <div class="ui input">
                    <input type="text" placeholder="Adresse IP" value={this.state.ip} onChange={this.handleChangeIP.bind(this)} />
                    &nbsp;&nbsp;
                    <input type="text" placeholder="Port" class="input-port-login" value={this.state.port} onChange={this.handleChangePort.bind(this)} />
                  </div>
                </div>
                <div class="field">
                  <div class="ui input">
                    <input type="text" placeholder="Nom d'utilisateur" value={this.state.username} onChange={this.handleChangeUsername.bind(this)} />
                  </div>
                </div>
                <div class="field">
                  <div class="ui input">
                    <input type="password" name="password" placeholder="Mot de passe" value={this.state.password} onChange={this.handleChangePassword.bind(this)} />
                  </div>
                </div>
                <button class="ui button" onClick={this.login.bind(this)}>Connexion</button>
              </div>
              <div class="ui negative message error-ip" id="error-ip">
                <div class="header">
                  Impossible de se connecter à {this.state.ip}:{this.state.port} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
