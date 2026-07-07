import * as SecureStore from 'expo-secure-store';
import { createContext, useContext, useEffect, useState } from 'react';

const TOKEN_KEY = 'auth_token';

type AuthContextType = {
  isLoggedIn: boolean;
  isLoading: boolean;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // SecureStore.getItemAsync(TOKEN_KEY).then((token: string | null) => {
    // setTimeout(() => {
    //   setIsLoggedIn(true);
    //   setIsLoading(false);
    // }, 3000);
    // });
  }, []);

  const signIn = async (token: string) => {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
    setIsLoggedIn(true);
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
