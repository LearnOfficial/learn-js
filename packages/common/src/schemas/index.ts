import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url'
import { ICoreInfo } from './coreInfo';
import { IUserLogInInput, IUserSignUpInput, IUserToken } from './user';
import { IUser } from 'src/entities/user';

export interface ISchemas {
	coreInfo: string;
	user: string;
}

export interface IQueryResolvers {
	Query: {
		coreInfo: () => Promise<ICoreInfo>
		logIn: (_: any, { userLogInInput }: { userLogInInput: IUserLogInInput }) => Promise<IUser>
	},
	Mutation: {
		signUp: (_: any, { userSignUpInput }: { userSignUpInput: IUserSignUpInput }) => Promise<IUserToken>
	}
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class TypeDefs {
	schemas: ISchemas;

	constructor() {
		this.schemas = {
			coreInfo: fs.readFileSync(path.join(__dirname, './core.gql')).toString(),
			user: fs.readFileSync(path.join(__dirname, './user/user.gql')).toString(),
		};
	}

	get toString() {
		return `#graphql
			${this.schemas.user}
			${this.schemas.coreInfo}

			type Query {
				coreInfo: CoreInfo
				logIn(userLogInInput: IUserLogInInput!): IUser
			}

			type Mutation {
				signUp(userSignUpInput: IUserSignUpInput!): IUserToken
			}
		`;
	}
}

export const typeDefs: TypeDefs = new TypeDefs();


