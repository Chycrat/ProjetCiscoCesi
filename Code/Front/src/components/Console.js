import React, { Component } from 'react';
import Navbar from './Navbar.js';
import ModalAbout from './ModalAbout.js';
import Footer from './Footer.js';
import axios from 'axios';
import './style/Console.css';
import { tsOptionalType } from '@babel/types';

class Console extends Component {

  constructor(props){
    super(props);
    this.state = {
      cmd : "",
      result : ""
    }
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      document.getElementById("loader").style.opacity = 1;
      
      axios.post('http://10.1.1.1/api/cmd/', {
        cmd : this.state.cmd
      }).then((result) => {
        var test = result.data.data.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        this.setState({result : test});
        document.getElementById("loader").style.opacity = 0;
        document.getElementById("theRealFooter").style.opacity = 0;
      });
    }


  }

  renderResult = (data) => {
    //console.log(data);
    if(document.getElementById("result-data") !== null){
      document.getElementById("result-data").innerHTML = data;
    }
      
    //return <p>{data}</p>;
  }

  handleChange = (e) => {
    this.setState({cmd : e.target.value})
    //alert(e.target.value.length);
   //if(e.target.value.length < 2){
   //  document.getElementById("result-data").innerHTML = "";
   //}
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
              <input type="text" placeholder="Saisir une commande..." onKeyPress={this.handleKeyPress} value={this.state.cmd} onChange={this.handleChange.bind(this)} />
            </div>
          </div>
          <div class="sixteen wide column center"><div class="ui active inline loader" id="loader"></div></div>
          <div class="sixteen wide column center">
            <pre><div id="result-data"></div></pre>
            {this.renderResult(this.state.result)}
          </div>
        </div>
        <ModalAbout />
        <Footer/>
      </div>
    );
  }
}

export default Console;
