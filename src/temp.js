import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PetList from './PetList';

let i = 0;
let l = 15;
const key = 'EHjH5DocMd34RmHnTzQw1sJjrt7irWvSR18MYNt09wkIFFHRch';
	const secret = 'tfgssIG79q0qcB2I1HwdBicUKMcVR645QH5a1zh5';
url='https://api.petfinder.com/v2/animals?type=dog&page=2'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animals: {
				type: {
					name: 'Dog',
					coats: ['Hairless', 'Short', 'Medium', 'Long', 'Wire', 'Curly'],
					colors: [
						'Apricot / Beige',
						'Bicolor',
						'Black',
						'Brindle',
						'Brown / Chocolate',
						'Golden',
						'Gray / Blue / Silver',
						'Harlequin',
						'Merle (Blue)',
						'Merle (Red)',
						'Red / Chestnut / Orange',
						'Sable',
						'Tricolor (Brown, Black, & White)',
						'White / Cream',
						'Yellow / Tan / Blond / Fawn',
					],
					genders: ['Male', 'Female'],
					_links: {
						self: {
							href: '/v2/types/dog',
						},
						breeds: {
							href: '/v2/types/dog/breeds',
						},
					},
				},
			},
			animalsList: {},
			detail: {},
			searchString: '',
		};
	}

	handleChange = (event) => {
		this.setState({ searchString: event.target.value });
	};

	
function getPets(url) {
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
			return fetch(url, {displayList
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
			this.setState({animals:resp})
	updateDisplay()
		})
		.catch(function (err) {
			// Log any errors
			console.log('something went wrong', err);
		});}

	//searchs breed size gender age name location distance limit

	updateDisplay = () => {
		let tempArray = [];
		for (i; i <= l; i++) {
			tempArray.push(this.animals[i]);
		}
		this.setState({ animalsList: tempArray });
	};

	render() {
		return (
			<div>
				<Header />
				<PetList animalsList={}/>
			</div>
		);
	}
}

export default App;
