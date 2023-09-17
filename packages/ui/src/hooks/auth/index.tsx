import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

export type ICommonAuthParameter = React.Dispatch<React.SetStateAction<string>>;

export type IAuthProviderAdapter = {
  logIn: (token: string, setToken: ICommonAuthParameter) => Promise<void>;
  logOut: (token: string, setToken: ICommonAuthParameter) => Promise<void>;
  signUp: (token: string, setToken: ICommonAuthParameter) => Promise<void>;
};

export type IAuthProviderContextProps = {
  token: string;
  logIn: (token: string) => Promise<void>;
  logOut: (token: string) => Promise<void>;
  signUp: (token: string) => Promise<void>;
};

export type IAuthProviderProps = {
  children: ReactNode;
  adapter: IAuthProviderAdapter;
  token?: string;
};

const AuthContext = createContext<IAuthProviderContextProps>({
  token: '',
  logIn: async () => {},
  logOut: async () => {},
  signUp: async () => {}
});

export function AuthProvider({ children, adapter, token }: IAuthProviderProps) {
  const [secureToken, setToken] = useState<string>(token ?? '');

  const value = useMemo(() => {
    const logIn = async (token: string) => {
      await adapter.logIn(token, setToken);
    };

    const logOut = async (token: string) => {
      await adapter.logOut(token, setToken);
    };

    const signUp = async (token: string) => {
      await adapter.signUp(token, setToken);
    };
    return { token: secureToken, logIn, logOut, signUp };
  }, [secureToken]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
