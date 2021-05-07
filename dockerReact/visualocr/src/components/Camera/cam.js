import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { CameraFeed } from './components/camera-feed';

const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);

    // Connect to a seaweedfs instance
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


