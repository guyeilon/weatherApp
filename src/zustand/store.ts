import create from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser } from '../types/user';

const toggleTheme = (theme: string) => {
	return theme === 'dark' ? 'light' : 'dark';
};

const toggleDegree = (degree: string) => {
	return degree === 'fahrenheit' ? 'celsius' : 'fahrenheit';
};

type AppStore = {
	theme: string;
	degree: string;
	toggleTheme: (theme: string) => void;
	toggleDegree: (degree: string) => void;
};

const useAppStore = create<AppStore>()(
	persist(
		(set): AppStore => ({
			theme: 'light',
			degree: 'celsius',
			toggleTheme: (theme: string) => set(state => ({ ...state, theme: toggleTheme(theme) })),
			toggleDegree: (degree: string) => set(state => ({ ...state, degree: toggleDegree(degree) })),
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

export { useAppStore, useLoginStore };
