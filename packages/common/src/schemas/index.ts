import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url'
import { ICoreInfo } from './coreInfo';
import { IUserLogInInput, IUserSignUpInput, IUserToken } from './user';
import { ISubject } from 'src/entities/subject';
import { ISubjectCreateInput } from './subject';

export interface IAuthContext {
	id?: number;
	iat?: number;
}

export interface ISchemas {
	coreInfo: string;
	user: string;
	subject: string;
}

export interface IQueryResolvers {
	Query: {
		coreInfo: () => Promise<ICoreInfo>
		logIn: (_: any, { userLogInInput }: { userLogInInput: IUserLogInInput }, authContext: IAuthContext) => Promise<IUserToken>
	},
	Mutation: {
		signUp: (_: any, { userSignUpInput }: { userSignUpInput: IUserSignUpInput }, authContext: IAuthContext) => Promise<IUserToken>
		createSubject: (_: any, { subjectCreateInput }: { subjectCreateInput: ISubjectCreateInput }, authContext: IAuthContext) => Promise<ISubject>
	}
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class TypeDefs {
	schemas: ISchemas;

	constructor() {
		this.schemas = {
			coreInfo: fs.readFileSync(path.join(__dirname, './core.gql')).toString(),
			user: fs.readFileSync(path.join(__dirname, './user/user.gql')).toString(),
			subject: fs.readFileSync(path.join(__dirname, './subject/subject.gql')).toString(),
		};
	}

	get toString() {
		return `#graphql
			${this.schemas.coreInfo}
			${this.schemas.user}
			${this.schemas.subject}

			type Query {
				coreInfo: CoreInfo
				logIn(userLogInInput: IUserLogInInput!): IUserToken
			}

			type Mutation {
				signUp(userSignUpInput: IUserSignUpInput!): IUserToken
				createSubject(subjectCreateInput: ISubjectCreateInput!): ISubject
			}
		`;
	}
}

export const typeDefs: TypeDefs = new TypeDefs();


