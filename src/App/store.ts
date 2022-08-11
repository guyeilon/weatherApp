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
			toggleTheme: (theme: string) => set(() => ({ theme: toggleTheme(theme) })),
			toggleDegree: (degree: string) => set(() => ({ degree: toggleDegree(degree) })),
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

export default useStore;

const usePermissionStore = create(() => ({
	permission: 'denied',
	getPermission: async () => {
		const permissions = await navigator.permissions.query({ name: 'geolocation' });
		const result = permissions.state;
		return result;
	},
}));
