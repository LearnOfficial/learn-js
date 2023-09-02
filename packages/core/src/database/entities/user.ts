import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation, Repository } from "typeorm";
import { IUser } from "@learn/common/entities/user"
import { Subject } from "./subject";
import { IUserSignUpInput } from "@learn/common/schemas/user";
import { DatabaseDataSource } from "../data_source";

@Entity()
export class User implements IUser {
	private repository: Repository<User>;

	@PrimaryGeneratedColumn()
	id?: number | undefined;

	@OneToMany(() => Subject, (subject) => subject.user)
	subjects: Relation<Subject[]>;

	@Column()
	username: string;

	@Column()
	password?: string;

	@Column({nullable: true})
	photo: string;

	@Column()
	email: string;

	constructor(userSignUpInput?: IUserSignUpInput){
		if(userSignUpInput){
			Object.assign(this,userSignUpInput);
		}
		this.repository = DatabaseDataSource.getRepository(User);
	}

	async signUp(){
		await this.repository.save(this);
	}
}
