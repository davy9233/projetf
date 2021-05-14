import React, { Component } from 'react';
import './camera-feed.css';
import axios from "axios";
import { saveAs } from 'file-saver';

export class CameraFeed extends Component {
    /**
     * Processes available devices and identifies one by the label
     * @memberof CameraFeed
     * @instance
     */
    processDevices(devices) {
        devices.forEach(device => {
            console.log(device.label);
            this.setDevice(device);
        });
    }

    /**
     * Sets the active device and starts playing the feed
     * @memberof CameraFeed
     * @instance
     */
    async setDevice(device) {
        const { deviceId } = device;
        const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { deviceId } });
        this.videoPlayer.srcObject = stream;
        this.videoPlayer.play();
    }

    /**
     * On mount, grab the users connected devices and process them
     * @memberof CameraFeed
     * @instance
     * @override
     */
    async componentDidMount() {
        const cameras = await navigator.mediaDevices.enumerateDevices();
        this.processDevices(cameras);
    }

    /**
     * Handles taking a still image from the video feed on the camera
     * @memberof CameraFeed
     * @instance
     */
    takePhoto = () => {
   
        
            const formdata = new FormData();
       

            
           
       



        const { sendFile } = this.props;
        const context = this.canvas.getContext('2d');
        context.drawImage(this.videoPlayer, 0, 0, 680, 360);
        let resultat=this.canvas.toDataURL();

            




             formdata.append('uriimage', resultat);
            formdata.append("idUser","3");

        
            let txt = localStorage.getItem("token");
            var obj = JSON.parse(txt);
            let authoriz="token " + obj.token;
      
        


      const options = {
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/image/',
                
                headers: {
                  'Authorization' : authoriz,
                  'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'
                },
                data:formdata,
                
               
              };
        
        
        axios.request(options).then(function (response) {
                console.log('ok');
              }).catch(function (error) {
                console.error('erreur');
              });
        
        
        
        

        
    

        
        
         
    
    
        
  
       
        
        
 

        

    };

    render() {
        return (
            <div>
                <div className="c-camera-feed">
                    <div className="c-camera-feed__viewer">
                        <video ref={ref => (this.videoPlayer = ref)} width="680" heigh="360" />                                         
                    </div>
                    
                    <button class="ButtonDca" onClick={this.takePhoto}>prendre la photo</button>

                </div>    

                <div className="c-camera-feed">
                    <canvas  width="680" height="360" ref={ref => (this.canvas = ref)} />
                </div>

                     
            </div>
        );
    }
}
