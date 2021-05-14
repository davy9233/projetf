import React from 'react';
import { CameraFeed } from './components/camera-feed';
import './cam.css'

const uploadImage = async file => {
    const formData = new FormData();
    formData.append('photo', file);


    // Connect to a seaweedfs instance


/*     async function InsertPhoto(credentials) {
        let txt = localStorage.getItem("token");
        var obj = JSON.parse(txt);
        let authoriz="token " + obj.token;
        console.log(authoriz);
  


        return fetch('http://localhost:8000/api/image/', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': authoriz
          },
        });
        
       }

    InsertPhoto(formData)
      */
};



export default function Camera() {
    return (
        <div className="App">
            <h1>Image capture </h1>
            <p>ticket à scanner</p>
            <CameraFeed sendFile={uploadImage} />
        </div>
    );
}


