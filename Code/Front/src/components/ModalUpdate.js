import React, { Component } from 'react';

class ModalUpdate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error : "",
      checkbox : 0,
      ip : "",
      name : "",
      id : 0
    };
  }

  componentWillReceiveProps(){
    console.log("RECEIVE PROPS");
    this.setState({
      id : this.props.id,
      name : this.props.name,
      ip : this.props.ip
    }, () => {
      this.setState({
        id : this.props.id,
        name : this.props.name,
        ip : this.props.ip
      })
    });
  }

  hideModal = () => {
    console.log("test");
    const $ = window.$;
    $('.ui.small.modal')
      .modal('hide')
    ;
  }

  handleChangeId = (e) => {
    this.setState({id : e.target.value});
  }
  handleChangeName = (e) => {
    this.setState({name : e.target.value});
  }
  handleChangeIP = (e) => {
    this.setState({ip : e.target.value});
  }

  render(){
    return (
      <div class="container-modal-update">
        <div id="update" class="ui small modal">
          <div class="header">
              Modifier un VLAN
            </div>
            <div class="image content">
              <div class="description">
                <div class="ui header">
                  <form class="ui form">
                    <div class="field">
                      <input type="text" name="shipping[first-name]" placeholder="Identifiant" value={this.state.id} onChange={this.handleChangeId.bind(this)} />
                    </div>
                    <div class="field">
                      <input type="text" name="shipping[address]" placeholder="Nom du VLAN" value={this.state.name} onChange={this.handleChangeName.bind(this)} />
                    </div>
                    <div class="field">
                      <input type="text" name="shipping[address]" placeholder="Adresse IP" value={this.state.ip} onChange={this.handleChangeIP.bind(this)} />
                    </div>
                    <div class="ui segment">
                      <div class="field">
                        <div class="ui toggle checkbox">
                          <input type="checkbox" name="gift" id="checkbox-update" class="hidden" value={this.state.checkbox}  />
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

export default ModalUpdate;

