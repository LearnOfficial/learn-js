import { IEntity } from './entity';

export interface IUser extends IEntity {
  username: string;
  password?: string;
  photo: string;
  email: string;
}
