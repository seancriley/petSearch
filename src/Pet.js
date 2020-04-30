import React from 'react';

function Pet(pet) {
	let imageURL = '';

	if (pet.pet.photos[0] === undefined) {
		imageURL = 'not-available.jpg';
	} else {
		imageURL = pet.pet.photos[0].full;
	}

	return (
		<div className='pet-card'>
			<img className='photo' src={imageURL} alt={pet.pet.name}></img>
			<div className='data'>
				<div>{pet.pet.name}</div>
				<div>{pet.pet.contact.address.city}</div>
			</div>
			<div>{pet.pet.description}</div>
			<div>
				<a href={pet.pet.url}>More Information.</a>
			</div>
		</div>
	);
}

export default Pet;
