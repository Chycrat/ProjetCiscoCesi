import React from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';
import axios from 'axios';
import './style/DropZone.css';
import './style/DropZone.min.css';

export default class DropZone extends React.Component {
    constructor(props) {
        super(props);

        // For a full list of possible configurations,
        // please consult http://www.dropzonejs.com/#configuration
        this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "text/plain",
            autoProcessQueue: false,
            maxFiles: 200,
            dictDefaultMessage: "Glisser-déposer le fichier ici."
        };

        this.state = {
            uploadFolder : '',
            disableButton : true,
            projects : [],
            userRights : [],
            selectedProject : ''
        }

        this.componentConfig = {
            iconFiletypes: ['.txt'],
            showFiletypeIcon: true,
            postUrl: '/uploadHandler?uploadFolder='+ this.state.uploadFolder
        };

        this.dropzone = null;
    }

    componentWillMount() {

    }

    onChange = (e) => {
        /*const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
        this.componentConfig.postUrl = '/uploadHandler?uploadFolder='+ this.state.uploadFolder;*/
    }

    handleFileAdded(file) {
        //console.log(file);
    }

    handlePost() {
        this.dropzone.processQueue();
        this.dropzone.options.autoProcessQueue = true;

        /*console.log(this.state.uploadFolder);
        console.log(this.state.selectedProject)
        console.log(this.state.userRights);*/
        var user = JSON.parse(sessionStorage.getItem("connectedUser"));
        /*axios.post('api/dropzone/addRepository?uploadFolder='+this.state.uploadFolder+'&selectedProject='+ $("#inputGroupSelect01 option:selected").text()+'&userRights='+JSON.stringify(this.state.userRights)+'&userId='+user.prenom+" "+user.nom)
        .then((result) => {
            console.log(result);
        }) */
    }

    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;
        // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
            init: dz => this.dropzone = dz,
            addedfile: this.handleFileAdded.bind(this)
        }
        return (
            <div class="container-dropzone">
                <br/>
                <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
            </div>
        );
    }
}