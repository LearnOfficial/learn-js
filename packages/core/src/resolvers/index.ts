import { IQueryResolvers } from "@learn/common/schemas"
import { coreInfoResolver } from "./core_info";
import { logIn, signUp } from "./user";
import { createSubject } from "./subject"
import { createTask } from "./task";
import { createNote } from "./note";

const resolvers: IQueryResolvers = {
	Query: {
		coreInfo: coreInfoResolver,
		logIn: logIn
	},
	Mutation: {
		signUp: signUp,
		createSubject: createSubject,
		createTask: createTask,
		createNote: createNote
	}
};

const apolloResolvers: any = resolvers;
export { apolloResolvers };
