import {
  LazyQueryHookOptions,
  NoInfer,
  OperationVariables,
  gql
} from '@apollo/client';
import { IUserLogInInput } from '@learn/common/schemas/user';

export const LOGIN_QUERY = gql`
  query ($userLogInInput: IUserLogInInput!) {
    logIn(userLogInInput: $userLogInInput) {
      token
    }
  }
`;

export function parseLogInOptions(
  userLoginInInput: IUserLogInInput
): LazyQueryHookOptions<NoInfer<any>, NoInfer<OperationVariables>> {
  return {
    variables: {
      userLogInInput: userLoginInInput
    }
  };
}
