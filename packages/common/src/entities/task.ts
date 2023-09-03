import { IEntity } from './entity';

export interface ITask extends IEntity {
  title: string;
  description: string;
}
