import { IUser } from "@learn/common/entities/user";
import { IUserLogInInput, IUserSignUpInput, IUserToken } from "@learn/common/schemas/user";
import { User } from "../../database/entities/user"; 
import { JWT_SECRET } from "@learn/common/env"
import jwt from 'jsonwebtoken';

async function logIn(_: any, { userLogInInput }: { userLogInInput: IUserLogInInput }): Promise<IUser> {
	return {
		username: "learn",
		email: "learn",
		photo: "photo"
	}
}

async function signUp(_: any, { userSignUpInput }: { userSignUpInput: IUserSignUpInput }): Promise<IUserToken> {
	const user: User = new User(userSignUpInput);
	await user.signUp();
	return {
		token: jwt.sign({id: user.id}, JWT_SECRET)
	}
}
export { logIn, signUp };
