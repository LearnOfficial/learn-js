import { version } from "./version.js";

export interface IQuery {
	version: string;
}

export class TypeDefs {
	query: IQuery;

	constructor(){
		this.query = { version } ;
	}

	get toString(){
		return this.query.version;
	}
}

export const typeDefs: TypeDefs = new TypeDefs();


