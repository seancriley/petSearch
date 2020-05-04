import React from 'react';

function Pet(pet) {
	let imageURL = '';
	console.log(pet.pet.photos[0]);
	if (pet.pet.photos[0] === undefined) {
		imageURL = 'not-available.jpg';
	} else {
		imageURL = pet.pet.photos[0].full;
	}
	console.log(imageURL);
	return (
		<div className='pet-card'>
			<img className='photo' src={imageURL} alt={pet.pet.name}></img>
			<div>{pet.pet.name}</div>
			<div>{pet.pet.description}</div>
		</div>
	);
}

export default Pet;
