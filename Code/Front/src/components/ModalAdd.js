import React, { Component } from 'react';

class ModalAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error : "",
      checkbox : 0
    };
  }

  hideModal = () => {
    const $ = window.$;
    $('.ui.modal')
      .modal('hide')
    ;
  }

  handleChangeCheckbox = (e) => {
    const $ = window.$;
    $('#checkbox-add')
      .checkbox()
    ;
  }

  render() {
    return (
      <div class="container-modal-add">
        <div id="add" class="ui small modal">
          <div class="header">
              Ajouter un VLAN
            </div>
            <div class="image content">
              <div class="description">
                <div class="ui header">
                  <form class="ui form">
                    <div class="field">
                      <input type="text" name="shipping[first-name]" placeholder="Identifiant" />
                    </div>
                    <div class="field">
                      <input type="text" name="shipping[address]" placeholder="Nom du VLAN" />
                    </div>
                    <div class="field">
                      <input type="text" name="shipping[address]" placeholder="Adresse IP" />
                    </div>
                    <div class="ui segment">
                      <div class="field">
                        <div class="ui toggle checkbox" onClick={this.handleChangeCheckbox.bind(this)}>
                          <input type="checkbox" name="gift" id="checkbox-add" class="hidden" value={this.state.checkbox}  />
                          <label>No shutdown</label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>  
            <div class="actions">
              <div class="ui button" onClick={this.hideModal.bind(this)}>Annuler</div>
              <div class="ui button green" onClick={this.hideModal.bind(this)}>Valider</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalAdd;
