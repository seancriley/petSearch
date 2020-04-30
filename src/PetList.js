import React, { Component } from 'react';
import Pet from './Pet';

const PetList = ({ animalsList }) => {
	// return early if there are no images
	if (!animalsList.length) {
		return <h2>No Images Found!</h2>;
	}
	console.log(animalsList);
	return (
		<div className='gallery'>
			
		</div>
	);
};

export default PetList;
