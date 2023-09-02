import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url'
import { ICoreInfo } from './coreInfo';
import { IUserLogInInput, IUserSignUpInput, IUserToken } from './user';
import { ISubject } from 'src/entities/subject';
import { ISubjectCreateInput } from './subject';
import { ITaskCreateInput } from './task';
import { ITask } from 'src/entities/task';
import { INote } from 'src/entities/note';
import { INoteCreateInput } from './note';

export interface IAuthContext {
	id?: number;
	iat?: number;
}

export interface ISchemas {
	coreInfo: string;
	user: string;
	subject: string;
	task: string;
	note: string;
}

export interface IQueryResolvers {
	Query: {
		coreInfo: () => Promise<ICoreInfo>
		logIn: (_: any, { userLogInInput }: { userLogInInput: IUserLogInInput }, authContext: IAuthContext) => Promise<IUserToken>
	},
	Mutation: {
		signUp: (_: any, { userSignUpInput }: { userSignUpInput: IUserSignUpInput }, authContext: IAuthContext) => Promise<IUserToken>
		createSubject: (_: any, { subjectCreateInput }: { subjectCreateInput: ISubjectCreateInput }, authContext: IAuthContext) => Promise<ISubject>
		createTask: (_: any, { taskCreateInput }: { taskCreateInput: ITaskCreateInput }, authContext: IAuthContext) => Promise<ITask>
		createNote: (_: any, { noteCreateInput }: { noteCreateInput: INoteCreateInput }, authContext: IAuthContext) => Promise<INote>
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
			task: fs.readFileSync(path.join(__dirname, './task/task.gql')).toString(),
			note: fs.readFileSync(path.join(__dirname, './note/note.gql')).toString(),
		};
	}

	get toString() {
		return `#graphql
			${this.schemas.coreInfo}
			${this.schemas.user}
			${this.schemas.subject}
			${this.schemas.task}
			${this.schemas.note}

			type Query {
				coreInfo: CoreInfo
				logIn(userLogInInput: IUserLogInInput!): IUserToken
			}

			type Mutation {
				signUp(userSignUpInput: IUserSignUpInput!): IUserToken
				createSubject(subjectCreateInput: ISubjectCreateInput!): ISubject
				createTask(taskCreateInput: ITaskCreateInput!): ITask
				createNote(noteCreateInput: INoteCreateInput!): INote
			}
		`;
	}
}

export const typeDefs: TypeDefs = new TypeDefs();


