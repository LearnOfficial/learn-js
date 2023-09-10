import { IAuthContext } from '@learn/common/schemas';
import { GraphQLError } from 'graphql';
import { User } from '../database/entities/user';

export async function authGuard(authContext: IAuthContext) {
  if (!authContext.id) {
    throw new GraphQLError('You must provide a valid token.');
  }

  const user = new User();
  if(!await user.findById(authContext.id!)){
    throw new GraphQLError("The user isn't register.");
  }
}
