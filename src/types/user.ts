export type IUser = {
	email: string;
	firstName: string;
	lastName: string;
	id: number;
	token: string;
};

interface User {
	user: {
		email: string;
		first_name: string;
		last_name: string;
		id: number;
		token: string;
	};
}

interface Token {
	token: string;
}

export type UserServer = User & Token;
