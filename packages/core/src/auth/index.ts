import { IAuthContext } from '@learn/common/schemas';
import { GraphQLError } from 'graphql';

export async function authGuard(authContext: IAuthContext) {
  if (!authContext.id) {
    throw new GraphQLError('You must provide a valid token.');
  }
}
