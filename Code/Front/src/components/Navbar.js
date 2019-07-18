import React, { Component } from 'react';
import './style/Navbar.css';

class Navbar extends Component {

  navigate = (page) => {
    if(page == "/console"){
      this.props.history.push(page);
    }else{
      this.props.history.push(page);
    }
  }

  showAbout = ()=> {
    const $ = window.$;
    $('#about')
      .modal('show')
    ;
  }
  renderNavbar = () => {
    let htmlToReturn = [];
    if(this.props.page === "status"){
      htmlToReturn.push(
        <div class="ui pointing menu">
          <a class="item"><img src="./assets/images/logo.png" /></a>
          <a class="item active">Statut</a>
          <a class="item" onClick={this.navigate.bind(this,"/console")}>Console</a>
          <a class="item" onClick={this.navigate.bind(this,"/import-export")}>Import/Export</a>
          <a class="item" onClick={this.navigate.bind(this,"/configuration")}>Configuration</a>
          <a class="item" onClick={this.showAbout.bind(this)}>À propos</a>
          <div class="right menu">
            <a class="item" onClick={this.navigate.bind(this,"/")}>Déconnexion</a>
          </div>
        </div>
      );
    }else if(this.props.page === "console"){
      htmlToReturn.push(
        <div class="ui pointing menu">
          <a class="item"><img src="./assets/images/logo.png" /></a>
          <a class="item" onClick={this.navigate.bind(this,"/status")}>Statut</a>
          <a class="item active">Console</a>
          <a class="item" onClick={this.navigate.bind(this,"/import-export")}>Import/Export</a>
          <a class="item" onClick={this.navigate.bind(this,"/configuration")}>Configuration</a>
          <a class="item" onClick={this.showAbout.bind(this)}>À propos</a>
          <div class="right menu">
            <a class="item" onClick={this.navigate.bind(this,"/")}>Déconnexion</a>
          </div>
        </div>
      );
    }else if(this.props.page === "importExport"){
      htmlToReturn.push(
        <div class="ui pointing menu">
          <a class="item"><img src="./assets/images/logo.png" /></a>
          <a class="item" onClick={this.navigate.bind(this,"/status")}>Statut</a>
          <a class="item" onClick={this.navigate.bind(this,"/console")}>Console</a>
          <a class="item active">Import/Export</a>
          <a class="item" onClick={this.navigate.bind(this,"/configuration")}>Configuration</a>
          <a class="item" onClick={this.showAbout.bind(this)}>À propos</a>
          <div class="right menu">
            <a class="item" onClick={this.navigate.bind(this,"/")}>Déconnexion</a>
          </div>
        </div>
      );
    }else if(this.props.page === "configuration"){
      htmlToReturn.push(
        <div class="ui pointing menu">
          <a class="item"><img src="./assets/images/logo.png" /></a>
          <a class="item" onClick={this.navigate.bind(this,"/status")}>Statut</a>
          <a class="item" onClick={this.navigate.bind(this,"/console")}>Console</a>
          <a class="item" onClick={this.navigate.bind(this,"/import-export")}>Import/Export</a>
          <a class="item active">Configuration</a>
          <a class="item" onClick={this.showAbout.bind(this)}>À propos</a>
          <div class="right menu">
            <a class="item" onClick={this.navigate.bind(this,"/")}>Déconnexion</a>
          </div>
        </div>
      );
    }
    return htmlToReturn;
  }

  render(){
    return (
      <div className="navbar">
        {this.renderNavbar()}
      </div>
    );
  }
}

export default Navbar;
