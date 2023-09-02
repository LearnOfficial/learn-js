import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation, Repository } from "typeorm";
import { INote } from "@learn/common/entities/note"
import { Subject } from "./subject";
import { INoteCreateInput } from "@learn/common/schemas/note";
import { DatabaseDataSource } from "../data_source";

@Entity()
export class Note implements INote {
	private repository: Repository<Note>;

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

	constructor(noteCreateInput?: INoteCreateInput) {
		if (noteCreateInput) {
			Object.assign(this, noteCreateInput);
		}
		this.repository = DatabaseDataSource.getRepository(Note);
	}

	async create() {
		const note: Note = await this.repository.save(this);
		Object.assign(this, note);
	}
}
