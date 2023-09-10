import { IEntity } from './entity';

export interface INote extends IEntity {
  title: string;
  description: string;
  path: string;
}
