import create from 'zustand';
import { persist } from 'zustand/middleware';

const toggleTheme = (theme: string) => {
	return theme === 'dark' ? 'light' : 'dark';
};

const toggleDegree = (degree: string) => {
	return degree === 'fahrenheit' ? 'celsius' : 'fahrenheit';
};

type Store = {
	theme: string;
	degree: string;
	toggleTheme: (theme: string) => void;
	toggleDegree: (degree: string) => void;
};

const useStore = create<Store>()(
	persist(
		(set): Store => ({
			theme: 'light',
			degree: 'celsius',
			toggleTheme: (theme: string) => set(() => ({ theme: toggleTheme(theme) })),
			toggleDegree: (degree: string) => set(() => ({ degree: toggleDegree(degree) })),
		}),
		{
			name: 'userPref',
			getStorage: () => sessionStorage,
		}
	)
);

export default useStore;
