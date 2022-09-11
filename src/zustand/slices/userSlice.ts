import { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser } from '../../types/userTypes';

export type userSlice = {
	user: IUser | null;
	setUser: (user: IUser | undefined) => void;
	clearUser: () => void;
};

export const userSlice: StateCreator<userSlice, [], [['zustand/persist', userSlice]], userSlice> = persist(
	(set): userSlice => ({
		user: null,
		setUser: (user: IUser | undefined) => set(state => ({ ...state, user: user })),
		clearUser: () => set(state => ({ ...state, user: null })),
	}),
	{
		name: 'weatherApp_User',
		getStorage: () => localStorage,
	}
);
