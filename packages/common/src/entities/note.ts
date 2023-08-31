import { IEntity } from "./entity";

export interface INote extends IEntity {
	title: string;
	description: string;
	body: string;
	subjectId?: number;
}
