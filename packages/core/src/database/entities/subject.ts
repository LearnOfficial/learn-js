import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { ISubject } from "@learn/common/entities/subject"
import { User } from "./user";
import { Note } from "./note";
import { Task } from "./task";

@Entity()
export class Subject implements ISubject {

	@PrimaryGeneratedColumn()
	id?: number | undefined;

	@ManyToOne(() => User, (user) => user.subjects)
	user: Relation<User>

	@OneToMany(() => Note, (note) => note.subject)
	notes: Relation<Note[]>;

	@OneToMany(() => Task, (task) => task.subject)
	tasks: Relation<Task[]>;

	@Column()
	title: string;

	@Column()
	description: string;
}
