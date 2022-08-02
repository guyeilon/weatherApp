import React, { useEffect, useState } from 'react';

export const useLocalStorageState = (defaultValue: unknown, key: string): [unknown, React.Dispatch<unknown>] => {
	const [value, setValue] = useState(() => {
		const stickyValue = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
		console.log('stickyValue:', stickyValue);

		return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
	});
	console.log('value:', value);

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
