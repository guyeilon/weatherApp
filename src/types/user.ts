interface User {
	email: string;
	firstName: string;
	lastName: string;
	id: number;
	token: string;
}

export type UserData = {
	user: User;
};
export type UserServer = {
	first_name: string;
	last_name: string;
	email: string;
	id: number;
	api_key: string;

	token: string;
	access_token: string;
};
