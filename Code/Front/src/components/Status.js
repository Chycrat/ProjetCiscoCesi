import React, { Component } from 'react';
import Navbar from './Navbar.js';
import ModalAbout from './ModalAbout.js';
import Footer from './Footer.js';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import './style/Status.css';

class Status extends Component {

  constructor(props){
    super(props);
    this.state = {
        activePort : 0,
        data : []
    }
  }

  componentWillMount(){
    let data = [{name: '1', uv: this.getRandomInt(0,100)},{name: '2', uv: this.getRandomInt(0,100)},{name: '3', uv: this.getRandomInt(0,100)},{name: '4', uv: this.getRandomInt(0,100)},{name: '5', uv: this.getRandomInt(0,100)},{name: '6', uv: this.getRandomInt(0,100)},{name: '7', uv: this.getRandomInt(0,100)},{name: '8', uv: this.getRandomInt(0,100)},{name: '9', uv: this.getRandomInt(0,100)},{name: '10', uv: this.getRandomInt(0,100)},{name: '11', uv: this.getRandomInt(0,100)},{name: '12', uv: this.getRandomInt(0,100)},{name: '13', uv: this.getRandomInt(0,100)},{name: '14', uv: this.getRandomInt(0,100)},{name: '15', uv: this.getRandomInt(0,100)},{name: '16', uv: this.getRandomInt(0,100)},{name: '17', uv: this.getRandomInt(0,100)},{name: '18', uv: this.getRandomInt(0,100)},{name: '19', uv: this.getRandomInt(0,100)},{name: '20', uv: this.getRandomInt(0,100)},{name: '21', uv: this.getRandomInt(0,100)},{name: '22', uv: this.getRandomInt(0,100)},{name: '23', uv: this.getRandomInt(0,100)},{name: '24', uv: this.getRandomInt(0,100)}];
    this.setState({data : data});
  }

  setActivePort = (activePort) => {
    document.getElementById("informations").style.display = "block";
    document.getElementById("chart-informations").style.display = "block";
    this.setState({activePort : activePort});
    let data = [{name: '1', uv: this.getRandomInt(0,100)},{name: '2', uv: this.getRandomInt(0,100)},{name: '3', uv: this.getRandomInt(0,100)},{name: '4', uv: this.getRandomInt(0,100)},{name: '5', uv: this.getRandomInt(0,100)},{name: '6', uv: this.getRandomInt(0,100)},{name: '7', uv: this.getRandomInt(0,100)},{name: '8', uv: this.getRandomInt(0,100)},{name: '9', uv: this.getRandomInt(0,100)},{name: '10', uv: this.getRandomInt(0,100)},{name: '11', uv: this.getRandomInt(0,100)},{name: '12', uv: this.getRandomInt(0,100)},{name: '13', uv: this.getRandomInt(0,100)},{name: '14', uv: this.getRandomInt(0,100)},{name: '15', uv: this.getRandomInt(0,100)},{name: '16', uv: this.getRandomInt(0,100)},{name: '17', uv: this.getRandomInt(0,100)},{name: '18', uv: this.getRandomInt(0,100)},{name: '19', uv: this.getRandomInt(0,100)},{name: '20', uv: this.getRandomInt(0,100)},{name: '21', uv: this.getRandomInt(0,100)},{name: '22', uv: this.getRandomInt(0,100)},{name: '23', uv: this.getRandomInt(0,100)},{name: '24', uv: this.getRandomInt(0,100)}];
    this.setState({data : data});
  }

  setEnablePort = () => {
    document.getElementById(this.getRandomInt(1,28)).style.background = "lightgreen";
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  render(){
    return (
      <div className="Status">
        <Navbar page="status" history={this.props.history} />
        <div class="ui segment container-margin-status">
          <div class="five wide column center">
            Hôte : Switch Cisco 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
            IP:Port : 127.0.0.1:3000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
            Adresse MAC : 00:1B:44:11:3A:B7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
          </div>
        </div>
        <div class="ui segment container-margin-status">
          <h3>Status des ports</h3>
          <table class="ui celled table">
            <tbody id="tbody-status">
              <tr>
                <td data-label="slot" class="slot-switch" id="1" onClick={this.setActivePort.bind(this,"1")}>1</td>
                <td data-label="slot" class="slot-switch" id="3" onClick={this.setActivePort.bind(this,"3")}>3</td>
                <td data-label="slot" class="slot-switch" id="5" onClick={this.setActivePort.bind(this,"5")}>5</td>
                <td data-label="slot" class="slot-switch" id="7" onClick={this.setActivePort.bind(this,"7")}>7</td>
                <td data-label="slot" class="slot-switch" id="9" onClick={this.setActivePort.bind(this,"9")}>9</td>
                <td data-label="slot" class="slot-switch" id="11" onClick={this.setActivePort.bind(this,"11")}>11</td>
                <td data-label="slot" class="slot-switch" id="13" onClick={this.setActivePort.bind(this,"13")}>13</td>
                <td data-label="slot" class="slot-switch" id="15" onClick={this.setActivePort.bind(this,"15")}>15</td>
                <td data-label="slot" class="slot-switch" id="17" onClick={this.setActivePort.bind(this,"17")}>17</td>
                <td data-label="slot" class="slot-switch" id="19" onClick={this.setActivePort.bind(this,"19")}>19</td>
                <td data-label="slot" class="slot-switch" id="21" onClick={this.setActivePort.bind(this,"21")}>21</td>
                <td data-label="slot" class="slot-switch" id="23" onClick={this.setActivePort.bind(this,"23")}>23</td>
                <td data-label="slot" class="slot-switch-cascade" id="25" onClick={this.setActivePort.bind(this,"25")}>25</td>
                <td data-label="slot" class="slot-switch-cascade" id="27" onClick={this.setActivePort.bind(this,"27")}>27</td>
              </tr>
              <tr>
                <td data-label="slot" class="slot-switch" id="2" onClick={this.setActivePort.bind(this,"2")}>2</td>
                <td data-label="slot" class="slot-switch" id="4" onClick={this.setActivePort.bind(this,"4")}>4</td>
                <td data-label="slot" class="slot-switch" id="6" onClick={this.setActivePort.bind(this,"6")}>6</td>
                <td data-label="slot" class="slot-switch" id="8" onClick={this.setActivePort.bind(this,"8")}>8</td>
                <td data-label="slot" class="slot-switch" id="10" onClick={this.setActivePort.bind(this,"10")}>10</td>
                <td data-label="slot" class="slot-switch" id="12" onClick={this.setActivePort.bind(this,"12")}>12</td>
                <td data-label="slot" class="slot-switch" id="14" onClick={this.setActivePort.bind(this,"14")}>14</td>
                <td data-label="slot" class="slot-switch" id="16" onClick={this.setActivePort.bind(this,"16")}>16</td>
                <td data-label="slot" class="slot-switch" id="18" onClick={this.setActivePort.bind(this,"18")}>18</td>
                <td data-label="slot" class="slot-switch" id="20" onClick={this.setActivePort.bind(this,"20")}>20</td>
                <td data-label="slot" class="slot-switch" id="22" onClick={this.setActivePort.bind(this,"22")}>22</td>
                <td data-label="slot" class="slot-switch" id="24" onClick={this.setActivePort.bind(this,"24")}>24</td>
                <td data-label="slot" class="slot-switch-cascade" id="26" onClick={this.setActivePort.bind(this,"26")}>26</td>
                <td data-label="slot" class="slot-switch-cascade" id="28" onClick={this.setActivePort.bind(this,"28")}>28</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sixteen wide column center">
          <button class="ui button active" onClick={this.setEnablePort.bind(this)}>Test Allumage port</button>
        </div>
        <div class="ui segment container-margin-status" id="informations">
          <h3 class="title-informations-status">Détail du port {this.state.activePort}</h3>
          <div class="five wide column center">
            Etat : N/A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            IP : Non Actif &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Adresse MAC : N/A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Vitesse (10/100/1000) : N/A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            VLAN associé : N/A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
        <div class="sixteen wide column center" id="chart-informations">
          <LineChart width={1000} height={150} data={this.state.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
        <ModalAbout />
        <Footer/>
      </div>
    );
  }
}

export default Status;
