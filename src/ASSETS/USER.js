import React from 'react';
import Lottie from 'lottie-react';
import user from './user.json';

const USER = () => (
	<Lottie
		animationData={user}
		loop={true}
	/>
);

export default USER;
