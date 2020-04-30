import React, { Component } from 'react';
import Pet from './Pet';

const PetList = ({ animals }) => {
	// return early if there are no images
	if (!animals?.length) {
		return <h2>No Images Found!</h2>;
	}
	return (
		<div className='pet-grid'>
			{animals.map((pet) => (
				<Pet key={pet.id} pet={pet} />
			))}
		</div>
	);
};

export default PetList;
