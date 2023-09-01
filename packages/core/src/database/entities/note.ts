import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { INote } from "@learn/common/entities/note"
import { Subject } from "./subject";

@Entity()
export class Note implements INote {

	@PrimaryGeneratedColumn()
	id?: number | undefined;

	@ManyToOne(() => Subject, (subject) => subject.notes)
	subject: Relation<Subject>;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	body: string;
}
