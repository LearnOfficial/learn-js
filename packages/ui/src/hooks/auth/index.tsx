import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

export type ICommonAuthParameter = React.Dispatch<React.SetStateAction<string>>;

export type IAuthProviderAdapter = {
  logIn: (setToken: ICommonAuthParameter) => Promise<void>;
  logOut: (setToken: ICommonAuthParameter) => Promise<void>;
  signUp: (setToken: ICommonAuthParameter) => Promise<void>;
};

export type IAuthProviderContextProps = {
  token: string;
  logIn: () => Promise<void>;
  logOut: () => Promise<void>;
  signUp: () => Promise<void>;
};

export type IAuthProviderProps = {
  children: ReactNode;
  adapter: IAuthProviderAdapter;
};

const AuthContext = createContext<IAuthProviderContextProps>({
  token: '',
  logIn: async () => {},
  logOut: async () => {},
  signUp: async () => {}
});

export function AuthProvider({ children, adapter }: IAuthProviderProps) {
  const [token, setToken] = useState<string>('');

  const value = useMemo(() => {
    const logIn = async () => {
      await adapter.logIn(setToken);
    };

    const logOut = async () => {
      await adapter.logOut(setToken);
    };

    const signUp = async () => {
      await adapter.signUp(setToken);
    };
    return { token, logIn, logOut, signUp };
  }, [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
