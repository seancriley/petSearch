import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const key = 'EHjH5DocMd34RmHnTzQw1sJjrt7irWvSR18MYNt09wkIFFHRch';
const secret = 'tfgssIG79q0qcB2I1HwdBicUKMcVR645QH5a1zh5';
var org = 'RI77';
var status = 'adoptable';

fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body:
		'grant_type=client_credentials&client_id=' +
		key +
		'&client_secret=' +
		secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
	},
})
	.then(function (resp) {
		// Return the response as JSON
		return resp.json();
	})
	.then(function (data) {
		// Log the API data
		console.log('token', data);

		// Return a second API call
		// This one uses the token we received for authentication
		return fetch('https://api.petfinder.com/v2/animals?type=dog&page=2', {
			headers: {
				Authorization: data.token_type + ' ' + data.access_token,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
	})
	.then(function (resp) {
		// Return the API response as JSON
		return resp.json();
	})
	.then(function (data) {
		// Log the pet data
		console.log('pets', data);
	})
	.catch(function (err) {
		// Log any errors
		console.log('something went wrong', err);
	});



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
