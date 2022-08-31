import create from 'zustand';
import { persist } from 'zustand/middleware';
import { UserData } from '../types/user';

const toggleTheme = (theme: string) => {
	return theme === 'dark' ? 'light' : 'dark';
};

const toggleDegree = (degree: string) => {
	return degree === 'fahrenheit' ? 'celsius' : 'fahrenheit';
};

type Store = {
	theme: string;
	degree: string;
	permission: boolean;
	toggleTheme: (theme: string) => void;
	toggleDegree: (degree: string) => void;
	getPermission: () => Promise<void>;
};

const useStore = create<Store>()(
	persist(
		(set): Store => ({
			theme: 'light',
			degree: 'celsius',
			permission: false,
			toggleTheme: (theme: string) => set(state => ({ ...state, theme: toggleTheme(theme) })),
			toggleDegree: (degree: string) => set(state => ({ ...state, degree: toggleDegree(degree) })),
			getPermission: async () => {
				const permissions = await navigator.permissions.query({ name: 'geolocation' });
				const result = permissions.state;
				if (result === 'granted') {
					set({ permission: true });
				}
			},
		}),
		{
			name: 'userPref',
			getStorage: () => localStorage,
		}
	)
);
type loginStore = {
	user: UserData | null;
	setUser: (user: UserData) => void;
};

const useLoginStore = create<loginStore>()(
	persist(
		(set): loginStore => ({
			user: null,
			setUser: (user: UserData) => set(state => ({ ...state, user: user })),
		}),
		{
			name: 'loggedInUser',
			getStorage: () => localStorage,
		}
	)
);

export { useStore, useLoginStore };
