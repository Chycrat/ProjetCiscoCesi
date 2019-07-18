import React, { Component } from 'react';
import Navbar from './Navbar.js';
import DropZone from './DropZone.js';
import ModalAbout from './ModalAbout.js';
import Footer from './Footer.js';
import './style/ImportExport.css';

class ImportExport extends Component {
  render(){
    return (
      <div className="importExport">
        <Navbar page="importExport" history={this.props.history} />
        <div class="ui segment container-margin-status">
          <div class="five wide column center">
            Hôte : Switch Cisco 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
            IP:Port : 127.0.0.1:3000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
            Adresse MAC : 00:1B:44:11:3A:B7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <button class="ui button active">Exporter le fichier de configuration</button> 
          </div>
        </div>
        <div class="ui stackable center aligned page grid">
          <div class="ui grid sixteen wide column">
            <div class="ui segment column sixteen wide margin-export">
              <DropZone />
              <div class="sixteen wide column center">
                <button class="ui button active">Importer un fichier de configuration</button>
              </div>
            </div>
          </div>
        </div>
        <ModalAbout />
        <Footer/>
      </div>
    );
  }
}

export default ImportExport;
