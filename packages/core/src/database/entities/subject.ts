import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ISubject } from "@learn/common/entities/subject"

@Entity()
export class Subject implements ISubject {

	@PrimaryGeneratedColumn()
	id?: number | undefined;

	@Column()
	title: string;

	@Column()
	description: string;
}
