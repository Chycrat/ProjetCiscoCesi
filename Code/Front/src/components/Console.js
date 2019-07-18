import React, { Component } from 'react';
import Navbar from './Navbar.js';
import ModalAbout from './ModalAbout.js';
import Footer from './Footer.js';
import './style/Console.css';

class Console extends Component {

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      document.getElementById("loader").style.opacity = 1;
    }
  }

  renderResult = () => {
    var htmlToReturn = [];

    var test = "VLAN Name Status Ports ---- -------------------------------- --------- ------------------------------- 1 default active Fa0/1, Fa0/2, Fa0/3, Fa0/4 Fa0/5, Fa0/6, Fa0/7, Fa0/8 Fa0/9, Fa0/10, Fa0/11, Fa0/12 Fa0/13, Fa0/14, Fa0/15, Fa0/16 Fa0/17, Fa0/18, Fa0/19, Fa0/20 Fa0/21, Fa0/22, Fa0/23, Fa0/24 Gi0/1, Gi0/2 10 VLAN0010 active 20 VLAN0020 active 30 VLAN0030 active 40 VLAN0040 active 1002 fddi-default act/unsup 1003 token-ring-default act/unsup 1004 fddinet-default act/unsup 1005 trnet-default act/unsup";

    return "";
  }

  render(){
    return (
      <div className="console">
        <Navbar page="console" history={this.props.history} />
        <br/>
        <div class="ui grid">
          <div class="sixteen wide column center"><p>Appuyer sur la touche entrer pour exécuter la commande une fois saisie.</p></div>
          <div class="sixteen wide column center">          
            <div class="ui icon input">
              <input type="text" placeholder="Saisir une commande..." onKeyPress={this.handleKeyPress} />
            </div>
          </div>
          <div class="sixteen wide column center"><div class="ui active inline loader" id="loader"></div></div>
          <div class="sixteen wide column center">
            {this.renderResult()}
          </div>
        </div>
        <ModalAbout />
        <Footer/>
      </div>
    );
  }
}

export default Console;
