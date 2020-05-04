import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import PetList from './PetList';
import Nav from './Nav';

function App() {
	const [animals, setAnimals] = useState([]);
	const [animalsList, setAnimalsList] = useState([]);
	const [animal, setAnimal] = useState('type=dog');
	const [breed, setBreed] = useState('');
	const [size, setSize] = useState('');
	const [gender, setGender] = useState('');
	const [age, setAge] = useState('');
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [distance, setDistance] = useState('');
	const [limit, setLimit] = useState('&limit=25');

	const searchOptions = {
		limit: 25,
		rating: 'G',
		api: 'https://api.petfinder.com/v2/',
		endpoint: 'animals',
	};
	let i = 0;
	let l = 15;
	const key = 'EHjH5DocMd34RmHnTzQw1sJjrt7irWvSR18MYNt09wkIFFHRch';
	const secret = 'tfgssIG79q0qcB2I1HwdBicUKMcVR645QH5a1zh5';

	useEffect(() => {
		getPets();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function getPets() {
		const url = `${searchOptions.api}${searchOptions.endpoint}?${animal}${breed}${size}${age}${gender}${name}${location}${distance}${limit}`;

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
			.then((response) => response.json())

			.then((data) => {
				// Return a second API call
				// This one uses the token we received for authentication
				return fetch(url, {
					headers: {
						Authorization: data.token_type + ' ' + data.access_token,
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				});
			})
			.then((resp) => {
				// Return the API response as JSON
				return resp.json();
			})
			.then((data) => {
				// Log the pet data
updateDisplay(data)
				setAnimals(data.animals);
								console.log(data.animals);
			})
			.catch((err) => {
				// Log any errors
				console.log('something went wrong', err);
			});
	}

	function updateDisplay(animals) {
		console.log(animals)
		console.log(animals[0]);
		let tempArray = [{}];
		for (i; i <= l; i++) {
			tempArray.push(animals[i]);
			console.log(animals[1]);
		}
		console.log(tempArray);
		setAnimalsList(tempArray);
		
	}
	function animalSearch(event) {
		setAnimal(`&${event.target.value}`);
	}
	function breedSearch(event) {
		setBreed(`&${event.target.value}`);
	}
	function sizeSearch(event) {
		setSize(`&${event.target.value}`);
	}
	function genderSearch(event) {
		setGender(`&${event.target.value}`);
	}
	function ageSearch(event) {
		setAge(`&${event.target.value}`);
	}
	function nameSearch(event) {
		setName(`&${event.target.value}`);
	}
	function locationSearch(event) {
		setLocation(`&${event.target.value}`);
	}
	function distanceSearch(event) {
		setDistance(`&${event.target.value}`);
	}
	function limitSearch(event) {
		setLimit(`&${event.target.value}`);
	}

	return (
		<div>
			<Header />
			<Nav />
			<PetList animalsList={animalsList} />
		</div>
	);
}

export default App;
