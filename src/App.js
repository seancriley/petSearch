import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import PetList from './PetList';
import Nav from './Nav';

function App() {
	const [animals, setAnimals] = useState([]);
	const [animal, setAnimal] = useState('dog');
	const [breed, setBreed] = useState('');
	const [size, setSize] = useState('');
	const [gender, setGender] = useState('');
	const [age, setAge] = useState('');
	const [name, setName] = useState('');
	const [location, setLocation] = useState('90034');
	const [distance, setDistance] = useState('');
	const [limit, setLimit] = useState('25');

	const [searchAnimal, setSearchAnimal] = useState('type=dog');
	const [searchBreed, setSearchBreed] = useState('');
	const [searchSize, setSearchSize] = useState('');
	const [searchGender, setSearchGender] = useState('');
	const [searchAge, setSearchAge] = useState('');
	const [searchName, setSearchName] = useState('');
	const [searchLocation, setSearchLocation] = useState('&location=90034');
	const [searchDistance, setSearchDistance] = useState('');
	const [searchLimit, setSearchLimit] = useState('&limit=25');


	const searchOptions = {
		api: 'https://api.petfinder.com/v2/',
		endpoint: 'animals',
			};

	const key = 'EHjH5DocMd34RmHnTzQw1sJjrt7irWvSR18MYNt09wkIFFHRch';
	const secret = 'tfgssIG79q0qcB2I1HwdBicUKMcVR645QH5a1zh5';

	useEffect(() => {
		getPets();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// function getPets() {
		const url = `${searchOptions.api}${searchOptions.endpoint}?${searchOptions.animal}${searchOptions.breed}${searchOptions.size}${searchOptions.gender}${searchOptions.age}${searchOptions.name}${searchOptions.location}${searchOptions.distance}${searchOptions.limit}`;

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
				setAnimals(data.animals);
			})
			.catch((err) => {
				// Log any errors
				console.log('something went wrong', err);
			});
	}

	function animalSearch(event) {
		event.preventDefault();
		setAnimal(`${event.target.value}`);setSearchAnimal(`type=${event.target.value}`)
	}
	function breedSearch(event) {
		event.preventDefault();
		setBreed(`${event.target.value}`);
		setSearchBreed(`&breed=${event.target.value}`);
	}
	function sizeSearch(event) {
		event.preventDefault();
		setSize(`${event.target.value}`);
		setSearchSize(`&size=${event.target.value}`);
	}
	function genderSearch(event) {
		event.preventDefault();
		setGender(`${event.target.value}`);
		setSearchGender(`&gender=${event.target.value}`);
	}
	function ageSearch(event) {
		event.preventDefault();
		setAge(`${event.target.value}`);setSearchAge(`&age=${event.target.value}`);
	}
	function nameSearch(event) {
		event.preventDefault();
		setName(`${event.target.value}`);setSearchName(`&name=${event.target.value}`);
	}
	function locationSearch(event) {
		event.preventDefault();
		setLocation(`${event.target.value}`);
	}
	function distanceSearch(event) {
		event.preventDefault();
		setDistance(`${event.target.value}`);setSearchDistance(`&distance=${event.target.value}`);
	}
	function limitSearch(event) {
		event.preventDefault();
		setLimit(`${event.target.value}`);setSearchLimit(`&limit=${event.target.value}`);
	}
	function handleSubmit(event) {
		
		event.preventDefault();
	
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
			<PetList animals={animals} />
		</div>
	);
}

export default App;
