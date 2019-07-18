import React, { Component } from 'react';
import Navbar from './Navbar.js';
import ModalAbout from './ModalAbout.js';
import Footer from './Footer.js';
import ModalAdd from './ModalAdd.js';
import ModalUpdate from './ModalUpdate.js';
import ModalDelete from './ModalDelete.js';
import './style/Configuration.css';

class Configuration extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataToDelete : "",
      dataToUpdate : "",
      nameToUpdate : "",
      ipToUpdate : "",
      searchBarValue : "",
      data : [{"VLAN":"1","Name":"VLAN0001","IP":"192.168.0.50"},{"VLAN":"2","Name":"VLAN0002","IP":"192.168.0.100"},{"VLAN":"3","Name":"VLAN0003","IP":"192.168.0.150"},{"VLAN":"4","Name":"VLAN0004","IP":"88.168.0.200"},{"VLAN":"5","Name":"VLAN0005","IP":"180.168.1.204"},{"VLAN":"6","Name":"VLAN0006","IP":"192.168.0.205"}]
    }
  }
  showDeleteModal = (id) => {
    this.setState({dataToDelete : id})
    const $ = window.$;
    $('#delete')
      .modal('show')
    ;
  }
  showUpdateModal = (id,name,ip) => {
    this.setState({
      dataToUpdate : id,
      nameToUpdate : name,
      ipToUpdate : ip,
    }, () => {
      const $ = window.$;
      $('#update')
        .modal('show')
      ;
    })
  }
  showAddModal = () => {
    const $ = window.$;
    $('#add')
      .modal('show')
    ;
  }

  renderRows = () => {
    var htmlToReturn = [];
    this.state.data.map((key) => {
      if(key.VLAN.includes(this.state.searchBarValue) || key.Name.includes(this.state.searchBarValue) || key.IP.includes(this.state.searchBarValue)){
        htmlToReturn.push(
          <tr>
            <td data-label="vlan" class="center aligned">{key.VLAN}</td>
            <td data-label="name" class="center aligned">{key.Name}</td>
            <td data-label="name" class="center aligned">{key.IP}</td>
            <td data-label="actions" class="center aligned">
              <button class="ui orange button" onClick={this.showUpdateModal.bind(this,key.VLAN,key.Name,key.IP)}>Modifier</button>
              <button class="ui red button" onClick={this.showDeleteModal.bind(this,key.VLAN)}>Supprimer</button>
            </td>
          </tr>
        )
      }
    })
    return htmlToReturn;
  }

  handleChangeSearchBar = (e) => {
    this.setState({searchBarValue : e.target.value});
  }
  render(){
    return (
      <div className="configuration">
        <Navbar page="configuration" history={this.props.history} />
          <br/>
          <div class="ui grid">
            <div class="sixteen wide column center">          
              <div class="ui icon input">
                <button class="ui green button" onClick={this.showAddModal.bind(this)}>Ajouter</button>
                <input type="text" placeholder="Rechercher..." value={this.state.searchBarValue} onChange={this.handleChangeSearchBar} id="searchBar"/>
              </div>
            </div>
          </div>

          <table class="ui celled table">
            <thead>
              <tr>
                <th class="center aligned">VLAN</th>
                <th class="center aligned">Nom</th>
                <th class="center aligned">Adresse IP</th>
                <th class="center aligned">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        <ModalAdd />
        <ModalUpdate id={this.state.dataToUpdate} ip={this.state.ipToUpdate} name={this.state.nameToUpdate} />
        <ModalDelete dataToDelete={this.state.dataToDelete} />
        <ModalAbout />
        <Footer/>
      </div>
    );
  }
}

export default Configuration;
