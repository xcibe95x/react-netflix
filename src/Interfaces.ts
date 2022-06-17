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
  loggedUser: User;
  setUser(newUser: User): void;
  users: User[]
}

export interface User{
  name: string,
  profilePic: string
}

// CONTEXT
export const UserContext = createContext<IUserContext>({ loggedUser: {name: "", profilePic: ""}, setUser: () => {}, users: [] });
// ##########################

export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  backdrop_path: string;
  genres: Genre[];
  id: number;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  tagline?: string;
  title: string;
  vote_average: number;
  vote_count?: number;
}

export interface Logo {
  file_path: string;
  height: number;
  width: number;
  aspect_ratio: number;
}

export interface CastMember {
  gender: number;
  id: number;
  name: string;
  original_name: string;
}

export interface SliderSection {
  sectionTitle: string;
  pageIndex: number;
}

export enum Ratio {
  ratio_16x9 = "ratio_16-9",
  ratio_9x16 = "ratio_9-16",
}

export interface Image {
  style: string;
  src: string;
  alt: string;
  ratio: Ratio;
}
