export interface IUserLogInInput {
	username: string;
	password: string;
}

export interface IUserSignUpInput {
	username: string;
	password: string;
	email: string;
}

export interface IUserToken {
	token: string;
}
