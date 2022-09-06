import create from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser } from '../types/user';

const toggleTheme = (theme: string) => {
	return theme === 'dark' ? 'light' : 'dark';
};

const toggleDegree = (degree: string) => {
	return degree === 'fahrenheit' ? 'celsius' : 'fahrenheit';
};

type preferenceStore = {
	theme: string;
	degree: string;
	toggleTheme: (theme: string) => void;
	toggleDegree: (degree: string) => void;
};

const usePreferenceStore = create<preferenceStore>()(
	persist(
		(set): preferenceStore => ({
			theme: 'light',
			degree: 'celsius',
			toggleTheme: (theme: string) => set(state => ({ ...state, theme: toggleTheme(theme) })),
			toggleDegree: (degree: string) => set(state => ({ ...state, degree: toggleDegree(degree) })),
		}),
		{
			name: 'weatherAppPreference',
			getStorage: () => localStorage,
		}
	)
);
type authUserStore = {
	user: IUser | null;
	setUser: (user: IUser) => void;
	clearUser: () => void;
};

const useAuthUserStore = create<authUserStore>()(
	persist(
		(set): authUserStore => ({
			user: null,
			setUser: (user: IUser | undefined) => set(state => ({ ...state, user: user })),
			clearUser: () => set(state => ({ ...state, user: null })),
		}),
		{
			name: 'weatherAppUser',
			getStorage: () => localStorage,
		}
	)
);

export { usePreferenceStore, useAuthUserStore };
