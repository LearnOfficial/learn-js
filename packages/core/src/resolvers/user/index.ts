import { IUserLogInInput, IUserSignUpInput, IUserToken } from "@learn/common/schemas/user";
import { User } from "../../database/entities/user";
import { JWT_SECRET } from "@learn/common/env"
import jwt from 'jsonwebtoken';
import { GraphQLError } from "graphql";

async function logIn(_: any, { userLogInInput }: { userLogInInput: IUserLogInInput }): Promise<IUserToken> {
	const user = new User();
	if (await user.findByUsernameAndPassword(userLogInInput)) {
		return createUserJWT(user);
	}

	throw new GraphQLError("Incorrect username and password.");
}
async function createUserJWT(user: User): Promise<IUserToken> {
	return {
		token: jwt.sign({ id: user.id }, JWT_SECRET)
	}
}

async function signUp(_: any, { userSignUpInput }: { userSignUpInput: IUserSignUpInput }): Promise<IUserToken> {
	const user: User = new User(userSignUpInput);
	if(await user.signUp()){
		return await createUserJWT(user);
	}

	throw new GraphQLError("User already sign up.");
}
export { logIn, signUp };
