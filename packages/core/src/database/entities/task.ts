import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ITask } from "@learn/common/entities/task"

@Entity()
export class Task implements ITask {

	@PrimaryGeneratedColumn()
	id?: number | undefined;

	@Column()
	title: string;

	@Column()
	description: string;
}
