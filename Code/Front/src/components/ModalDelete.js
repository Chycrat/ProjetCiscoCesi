import React, { Component } from 'react';

class ModalDelete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error : ""
    };
  }

  hideModal = () => {
    const $ = window.$;
    $('.ui.modal')
      .modal('hide')
    ;
  }

  render() {
    return (
      <div class="container-modal-delete">
        <div id="delete" class="ui small modal">
          <div class="header">
            Supprimer un VLAN
          </div>
          <div class="image content">
            <div class="description">
              <div class="ui header">
                <p>Voulez-vous vraiment supprimer le VLAN : {this.props.dataToDelete}</p>
              </div>
            </div>
          </div>  
          <div class="actions">
            <div class="ui button" onClick={this.hideModal.bind(this)}>
              Annuler
            </div>
            <div class="ui button red" onClick={this.hideModal.bind(this)}>
              Valider
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalDelete;
