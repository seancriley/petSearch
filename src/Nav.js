import React from 'react';

function Nav(props) {
	const {
		animalSearch,
		animal,
		breedSearch,
		breed,
		sizeSearch,
		size,
		genderSearch,
		gender,
		ageSearch,
		age,
		nameSearch,
		name,
		locationSearch,
		location,
		distanceSearch,
		distance,
		limitSearch,
		limit,
		handleSubmit,
	} = props;

	return (
		<div className='sidebar'>
			<form onSubmit={handleSubmit} className='search'>
				Type
				<input
					placeholder='Animal Type'
					type='text'
					name='animal'
					required
					onChange={animalSearch}
					value={animal}
				/>
			</form>
			<form onSubmit={handleSubmit} className='search'>
				Breed
				<input
					placeholder='Breed Type'
					type='text'
					name='breed'
					required
					onChange={breedSearch}
					value={breed}
				/>
			</form>
			<form onSubmit={handleSubmit} className='search'>
				Size
				<input
					placeholder='Size (small, medium, large)'
					type='text'
					name='size'
					required
					onChange={sizeSearch}
					value={size}
				/>
			</form>
			<form onSubmit={handleSubmit} className='search'>
				Gender
				<input
					placeholder='Gender'
					type='text'
					name='gender'
					requiredpull origin master

					onChange={genderSearch}
					value={gender}
				/>
			</form>
			<form onSubmit={handleSubmit} className='search'>
				Age Group
				<input
					placeholder='Age (baby, young, adult)'
					type='text'
					name='age'
					required
					onChange={ageSearch}
					value={age}
				/>
			</form>
			<form onSubmit={handleSubmit} className='search'>
				Name
				<input
					placeholder='Name'
					type='text'
					name='name'
					required
					onChange={nameSearch}
					value={name}
				/>
			</form>
			<form onSubmit={handleSubmit} className='search'>
				Location
				<input
					placeholder='Location'
					type='text'
					name='location'
					required
					onChange={locationSearch}
					value={location}
				/>
			</form>
			<form onSubmit={handleSubmit} className='search'>
				Distance Radius
				<input
					placeholder='Distance (mi from location)'
					type='text'
					name='distance'
					required
					onChange={distanceSearch}
					value={distance}
				/>
			</form>
			<form onSubmit={handleSubmit} className='search'>
				Search Returns
				<input
					placeholder='Search Limit'
					type='text'
					name='limit'
					required
					onChange={limitSearch}
					value={limit}
				/>
			</form>

			<button type='submit' className='button' onClick={handleSubmit}>
				Search
			</button>
		</div>
	);
}

export default Nav;