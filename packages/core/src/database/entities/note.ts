import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { INote } from "@learn/common/entities/note"

@Entity()
export class Note implements INote {

	@PrimaryGeneratedColumn()
	id?: number | undefined;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	body: string;
}
