import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation, Repository } from "typeorm";
import { ISubject } from "@learn/common/entities/subject"
import { User } from "./user";
import { Note } from "./note";
import { Task } from "./task";
import { ISubjectCreateInput } from "@learn/common/schemas/subject";
import { DatabaseDataSource } from "../data_source";

@Entity()
export class Subject implements ISubject {
	private repository: Repository<Subject>;

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
	constructor(subjectCreateInput?: ISubjectCreateInput) {
		if (subjectCreateInput) {
			Object.assign(this, subjectCreateInput);
		}
		this.repository = DatabaseDataSource.getRepository(Subject);
	}

	async findByPk(id: number){
		const subject: Subject | null = await this.repository.findOneBy({id});
		Object.assign(this, subject);
	}

	async create() {
		const subject = await this.repository.save(this);
		Object.assign(this, subject)
	}
}
