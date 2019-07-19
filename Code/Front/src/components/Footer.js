import React, { Component } from 'react';
import './style/Footer.css';

class Footer extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="footer" id="theRealFooter">
        <div class="ui inverted vertical footer segment">
            <div class="ui center aligned container">
                <div class="ui horizontal inverted small divided link list">
                    <p class="item-footer">Vous êtes connecté en tant que {sessionStorage.getItem('username')} sur {sessionStorage.getItem('ip')}:{sessionStorage.getItem('port')}</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
