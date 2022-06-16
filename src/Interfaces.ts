import { createContext } from "react";

/**
 * Profile card interface, hold value for the Profile Card component content.
 */
export interface IProfileCard {
  name?: string;
  imgFilename?: string;
}

/**
 * User Context Interface, defines the currently logged user and a function to update it.
 */
export interface IUserContext {
  user?: string;
  setUser(newUser: string): void;
}

// CONTEXT
export const UserContext = createContext<IUserContext>({ setUser: () => {} });
// ##########################
