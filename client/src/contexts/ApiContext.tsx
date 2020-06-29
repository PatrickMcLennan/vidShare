import React, { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import axios, { AxiosResponse, AxiosError } from "axios";

import { LoadingToast } from "Component/Toasts/Toasts";
import client from "Utility/client";
import { ApiError } from "common";

export interface IApiContext {
  logIn: (
    showloading: boolean,
    { email, password }: { email: string; password: string }
  ) => Promise<void | ApiError>;
  registerUser: (newUser: {
    email: string;
    firstName: string;
    password: string;
  }) => Promise<void | ApiError>;
  editUser: (user: IUser) => Promise<IUser | ApiError>;
}

export const ApiContext = createContext({} as IApiContext);

interface IProps {
  children: ReactNode;
}

export function ApiContextProvider({ children }: IProps): JSX.Element {
  /**
   * @desc Creates a new user.
   * @param showLoading Show the spinner, true default
   * @param info Object with email + password
   * @return Nodda.
   */
  const logIn = (
    showLoading = true,
    { email, password }
  ): Promise<void | IUser> => {
    if (showLoading) LoadingToast(`Logging in...`);
    return axios({
      method: `POST`,
      url: `${process.env.API}${process.env.API_AUTH}`,
      data: {
        email,
        password,
      },
    })
      .then(({ data: { access_token, refresh_token } }) => {
        localStorage.setItem(
          process.env.TOKEN,
          JSON.stringify({ access_token, refresh_token })
        );
      })
      .catch(
        (error: AxiosError): ApiError => ({
          responseCode: Number(error.code),
          message: `Problem Loggin In`,
          error,
        })
      )
      .finally(() => toast.dismiss());
  };

  /**
   * @desc Registers a new User.
   * @param userObject New User
   * @returns Nodda
   */
  const registerUser = ({
    email,
    firstName,
    lastName,
    password,
  }): Promise<void | ApiError> => {
    LoadingToast(`Hold tight, we're creating an account for ${email}`);
    return axios({
      method: `POST`,
      url: `${process.env.API}${process.env.API_REGISTER_USER}`,
      data: {
        email,
        firstName,
        lastName,
        password,
      },
    })
      .then(({ data: { access_token, refresh_token } }) => {
        localStorage.setItem(
          process.env.TOKEN,
          JSON.stringify({ access_token, refresh_token })
        );
      })
      .catch(
        (error: AxiosError): ApiError => ({
          responseCode: Number(error.code),
          message: `Problem registering a user`,
          error,
        })
      )
      .finally(() => toast.dismiss());
  };

  const editUser = (editedUser): Promise<IUser | ApiError> => {
    LoadingToast(`doing things . . . `);
    return client({
      method: `POST`,
      url: `${process.env.API}${process.env.API_EDIT_USER}`,
      data: {
        user: editedUser,
      },
    })
      .then((changedUser: AxiosResponse<IUser>) => changedUser)
      .catch(
        (error: AxiosError): ApiError => ({
          responseCode: Number(error.code),
          message: `Problem editing a user`,
          error,
        })
      );
  };

  return (
    <ApiContext.Provider value={{ logIn, registerUser, editUser }}>
      {children}
    </ApiContext.Provider>
  );
}
