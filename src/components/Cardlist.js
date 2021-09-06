import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {
	return(
		<>
			{
				robots.map((user,i) => {
					return <Card {...robots[i]} />
				})
			}
		</>
	);
}

export default Cardlist;