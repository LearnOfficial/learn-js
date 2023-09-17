import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

export type AuthProviderContextProps = {
  token: string;
  logIn: () => void;
  logOut: () => void;
};

export type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthProviderContextProps>({
  token: '',
  logIn: () => {},
  logOut: () => {}
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string>('');

  const logIn = () => {
    setToken('token');
  };

  const logOut = () => {
    setToken('');
  };

  const value = useMemo(() => {
    return { token, logIn, logOut };
  }, [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
