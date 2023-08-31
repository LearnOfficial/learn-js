import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "@learn/common/entities/user"

@Entity()
export class User implements IUser {

	@PrimaryGeneratedColumn()
	id?: number | undefined;

	@Column()
	username: string;

	@Column()
	password?: string;

	@Column()
	photo: string;

	@Column()
	email: string;
}
