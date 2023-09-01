import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { IUser } from "@learn/common/entities/user"
import { Subject } from "./subject";

@Entity()
export class User implements IUser {

	@PrimaryGeneratedColumn()
	id?: number | undefined;

	@OneToMany(() => Subject, (subject) => subject.user)
	subjects: Relation<Subject[]>;

	@Column()
	username: string;

	@Column()
	password?: string;

	@Column()
	photo: string;

	@Column()
	email: string;
}
