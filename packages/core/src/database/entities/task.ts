import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { ITask } from "@learn/common/entities/task"
import { Subject } from "./subject";

@Entity()
export class Task implements ITask {

	@PrimaryGeneratedColumn()
	id?: number | undefined;

	@ManyToOne(() => Subject, (subject) => subject.tasks)
	subject: Relation<Subject>;

	@Column()
	title: string;

	@Column()
	description: string;
}
