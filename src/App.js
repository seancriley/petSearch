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
	const [location, setLocation] = useState('&location=90034');
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
				updateDisplay(data.animals);
				setAnimals(data.animals);
			})
			.catch((err) => {
				// Log any errors
				console.log('something went wrong', err);
			});
	}

	function updateDisplay(animals) {
		let tempArray = [];
		console.log(animals);
		for (i; i <= l; i++) {
			tempArray.push(animals[i]);
			// tempArray[i].photo=['']
			// tempArray[i].photo.push(animals[i].photo[0])
		}

		console.log(tempArray);
		setAnimalsList(tempArray);
	}
	function animalSearch(event) {
		event.preventDefault();
		setAnimal(`&${event.target.value}`);
	}
	function breedSearch(event) {
		event.preventDefault();
		setBreed(`&${event.target.value}`);
	}
	function sizeSearch(event) {
		event.preventDefault();
		setSize(`&${event.target.value}`);
	}
	function genderSearch(event) {
		event.preventDefault();
		setGender(`&${event.target.value}`);
	}
	function ageSearch(event) {
		event.preventDefault();
		setAge(`&${event.target.value}`);
	}
	function nameSearch(event) {
		event.preventDefault();
		setName(`&${event.target.value}`);
	}
	function locationSearch(event) {
		event.preventDefault();
		setLocation(`&${event.target.value}`);
	}
	function distanceSearch(event) {
		event.preventDefault();
		setDistance(`&${event.target.value}`);
	}
	function limitSearch(event) {
		event.preventDefault();
		setLimit(`&${event.target.value}`);
	}
	function handleSubmit(event) {
		event.preventDefault();
		// Don't forget to pass the searchString to getImages
		getPets();
	}

	return (
		<div>
			<Header />
			<Nav
				animalSearch={animalSearch}
				animal={animal}
				breedSearch={breedSearch}
				breed={breed}
				sizeSearch={sizeSearch}
				size={size}
				genderSearch={genderSearch}
				gender={gender}
				ageSearch={ageSearch}
				age={age}
				nameSearch={nameSearch}
				name={name}
				locationSearch={locationSearch}
				location={location}
				distanceSearch={distanceSearch}
				distance={distance}
				limitSearch={limitSearch}
				limit={limit}
				handleSubmit={handleSubmit}
			/>
			<PetList animalsList={animalsList} />
		</div>
	);
}

export default App;
