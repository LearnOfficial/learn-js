import { IQueryResolvers } from "@learn/common/schemas"
import { coreInfoResolver } from "./core_info";
import { logIn, signUp } from "./user";
import { createSubject } from "./subject"

const resolvers: IQueryResolvers = {
	Query: {
		coreInfo: coreInfoResolver,
		logIn: logIn
	},
	Mutation: {
		signUp: signUp,
		createSubject: createSubject
	}
};

const apolloResolvers: any = resolvers;
export { apolloResolvers };
