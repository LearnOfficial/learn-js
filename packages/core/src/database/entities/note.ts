import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  Repository
} from 'typeorm';
import { INote } from '@learn/common/entities/note';
import { Subject } from './subject';
import { INoteCreateInput } from '@learn/common/schemas/note';
import { DatabaseDataSource } from '../data_source';
import { ISubject } from '@learn/common/entities/subject';

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
  path: string;

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

  async findAllSubjectRelation(subject: ISubject): Promise<INote[]> {
    return await this.repository.find({
      relations: ['subject'],
      where: {
        subject: {
          id: subject.id!
        }
      }
    });
  }

  async findAll(userId: number): Promise<INote[]> {
    return await this.repository.find({
      relations: ['subject'],
      where: {
        subject: {
          user: {
            id: userId
          }
        }
      }
    });
  }
}
