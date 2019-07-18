import React, { Component } from 'react';
import './style/About.css';

class ModalAbout extends Component {
  hideModal = () => {
    const $ = window.$;
    $('.ui.modal')
      .modal('hide')
    ;
  }
  render(){
    return (
      <div className="about">
        <div class="ui modal" id="about">
          <div class="header">
            À propos
          </div>
          <div class="image content">
            <div class="ui medium image">
              <img src="./assets/images/logo.png" id="img-about"/>
            </div>
            <div class="description">
              <div class="ui header">
                <b class="line-about">Version Cisco web interface :</b> &nbsp;<span class="font-normal">v1.0.0</span><br/>
                <b class="line-about">Build :</b> &nbsp;<span class="font-normal">vendredi 19 juillet 2019</span><br/>
                <b class="line-about">Branch :</b> &nbsp;<span class="font-normal">master</span><br/>
                <b class="line-about">Commit :</b>  &nbsp;<span class="font-normal">8f5b19d73f</span><br/>
                <b class="line-about">Version React :</b> &nbsp;<span class="font-normal">v16.8.6</span><br/>
                <b class="line-about">Version Laravel :</b> &nbsp;<span class="font-normal">v4.2.0</span><br/>
              </div>
            </div>
          </div>  
          <div class="actions">
            <div class="ui button" onClick={this.hideModal.bind(this)}>
              Fermer
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalAbout;
