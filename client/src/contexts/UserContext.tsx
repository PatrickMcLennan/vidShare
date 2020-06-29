import React, {
  createContext,
  Dispatch,
  ReactNode,
  useState,
  SetStateAction,
} from "react";

interface IProps {
  children: ReactNode;
}

export interface IUserContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

export const UserContext = createContext({} as IUserContext);

export function UserContextProvider({ children }: IProps): JSX.Element {
  const [user, setUser] = useState({
    id: `idHash`,
    email: `patrick.a.mclennan@gmail.com`,
    firstName: `Patrick`,
    lastName: `McLennan`,
    videos: [],
    savedVideos: [],
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
