import React from 'react';
import Pet from './Pet';

const PetList = ({ animals }) => {
	// return if there are no images
	if (!animals?.length) {
		return <h2 className='pet-grid'>No Images Found!</h2>;
	}
	//Map out animals
	return (
		<div className='pet-grid'>
			{animals.map((pet) => (
				<Pet key={pet.id} pet={pet} />
			))}
		</div>
	);
};

export default PetList;
