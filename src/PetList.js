import React, { Component } from 'react';
import Pet from './Pet';

const PetList = ({ animalsList }) => {
	// return early if there are no images
	if (!animalsList.length) {
		return <h2>No Images Found!</h2>;
	}
	return (
		<div className='pet-grid'>
			{animalsList.map((pet) => (
				<Pet key={pet.id} pet={pet} />
			))}
		</div>
	);
};

export default PetList;
