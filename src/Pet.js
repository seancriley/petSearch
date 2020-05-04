import React from 'react';

function Pet(props) {
    return (
			<div key={props.id} className='pet'>
				<img src={props.src} alt={props.name} />
            <div>{props.name}</div>
            <div>{props.description}</div>
			</div>
		);
}

export default Pet;