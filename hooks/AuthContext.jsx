import { useContext, createContext } from "react";
import { useStorageState } from './useStorageState';

const AuthContext = createContext < {
    signIn: () => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
} > ({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false,
});