import { StandaloneServerContextFunctionArgument } from '@apollo/server/dist/esm/standalone';
import { JWT_SECRET } from '@learn/common/env';
import { IAuthContext } from '@learn/common/schemas';
import jwt from 'jsonwebtoken';

export async function authContext({
  req
}: StandaloneServerContextFunctionArgument): Promise<IAuthContext> {
  const token = req?.headers?.authorization as string;
  if (!token) {
    return {};
  }

  let payload: IAuthContext = {};

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    payload = decoded as IAuthContext;
  });

  return payload;
}
