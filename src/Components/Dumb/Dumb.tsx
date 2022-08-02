import React from 'react';

// import usePersistentContext from '../../hooks/usePersistentContext';

const Dumb: React.FC = () => {
	// const [themeData] = usePersistentContext('theme');
	const themeData = localStorage.getItem('theme');
	console.log('themeData from Dumb:', themeData);

	return <div style={{ fontSize: '2rem' }}>{typeof themeData === 'string' && themeData}</div>;
};

export default Dumb;
