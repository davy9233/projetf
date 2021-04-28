import axios from 'axios';

import React,{Component} from 'react';

class App extends Component {

	state = {

	// Initially, no file is selected
	selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// Update the state
	this.setState({ selectedFile: event.target.files[0] });
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("api/uploadfile", formData);
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>Details du fichier:</h2>
			
<p>Nom du fichier: {this.state.selectedFile.name}</p>

			
<p>Type du fichier: {this.state.selectedFile.type}</p>

			
<p>
			Derniere modification:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>

		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>choisisez un fichier avant de telecharger</h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
			<h1>
			photo de tickets
			</h1>
			<h3>
			photo a telecharger
			</h3>
			<div>
				<input type="file" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>
				telecharger
				</button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default App;
