import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation, Repository } from "typeorm";
import { ITask } from "@learn/common/entities/task"
import { Subject } from "./subject";
import { ITaskCreateInput } from "@learn/common/schemas/task";
import { DatabaseDataSource } from "../data_source";

@Entity()
export class Task implements ITask {
	private repository: Repository<Task>;

	@PrimaryGeneratedColumn()
	id?: number | undefined;

	@ManyToOne(() => Subject, (subject) => subject.tasks)
	subject: Relation<Subject>;

	@Column()
	title: string;

	@Column()
	description: string;
	constructor(taskCreateInput?: ITaskCreateInput) {
		if (taskCreateInput) {
			Object.assign(this, taskCreateInput);
		}
		this.repository = DatabaseDataSource.getRepository(Task);
	}

	async create() {
		const task: Task = await this.repository.save(this);
		Object.assign(this, task);
	}
}
