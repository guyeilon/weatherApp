import { usePreferenceStore } from '../zustand/store';

export const usePreference = () => {
	const preference = usePreferenceStore(state => state);

	return { preference };
};
