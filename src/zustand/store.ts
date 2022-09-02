import create from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser } from '../types/user';

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
	user: IUser | null;
	setUser: (user: IUser) => void;
};

const useLoginStore = create<loginStore>()(
	persist(
		(set): loginStore => ({
			user: null,
			setUser: (user: IUser) => set(state => ({ ...state, user: user })),
		}),
		{
			name: 'loggedInUser',
			getStorage: () => localStorage,
		}
	)
);

export { useStore, useLoginStore };
