import React, { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import axios, { AxiosResponse, AxiosError } from "axios";

import { LoadingToast } from "Component/Toasts/Toasts";
import client from "Utility/client";
import { ApiError } from "src/types/client/api-error.interface";
import { User } from "src/types/users/user.model";
import { Video } from "src/types/videos/video.model";

export interface IApiContext {
  logIn: (
    showloading: boolean,
    { email, password }: { email: string; password: string }
  ) => Promise<void | ApiError>;
  postComment: (
    videoId: string,
    userId: string,
    comment: string
  ) => Promise<any>;
  registerUser: (newUser: {
    email: string;
    firstName: string;
    password: string;
  }) => Promise<void | ApiError>;
  editUser: (user: User) => Promise<User | ApiError>;
  searchVideos: (criteriaObject) => Promise<AxiosResponse | ApiError>;
}

export const ApiContext = createContext({} as IApiContext);

interface IProps {
  children: ReactNode;
}

export function ApiContextProvider({ children }: IProps): JSX.Element {
  /* * * * * * *
   * COMMENTS  *
   * * * * * * */
  /**
   * @desc POSTS a new comment
   * @param videoId Id the of video
   * @param userId Id of the User Posting
   * @param comment Comment Being posted
   */
  const postComment = (
    videoId: string,
    userId: string,
    comment: string
  ): Promise<any> => {
    LoadingToast(`. . .`);
    return axios({
      method: `POST`,
      url: `${process.env.API}${process.env.API_POST_COMMENT}`,
      data: {
        videoId,
        userId,
        comment,
      },
    })
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
      .finally(() => toast.dismiss());
  };

  /* * * * *
   * USER *
   * * * * */
  /**
   * @desc Creates a new user.
   * @param showLoading Show the spinner, true default
   * @param info Object with email + password
   * @return Nodda.
   */
  const logIn = (
    showLoading = true,
    { email, password }
  ): Promise<void | ApiError> => {
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

  /**
   * @desc Edits a USer
   * @param editedUser Current user being edited
   * @return User Returns User
   */
  const editUser = (editedUser): Promise<AxiosResponse<User> | ApiError> => {
    LoadingToast(`doing things . . . `);
    return client({
      method: `POST`,
      url: `${process.env.API}${process.env.API_EDIT_USER}`,
      data: {
        user: editedUser,
      },
    })
      .then((changedUser: AxiosResponse<User>) => changedUser)
      .catch(
        (error: AxiosError): ApiError => ({
          responseCode: Number(error.code),
          message: `Problem editing a user`,
          error,
        })
      );
  };

  /* * * * * * * *
   * - VIDEOS -  *
   * * * * * * * */

  /**
   * @desc Applies Search Criteria
   * @param criteriaObject Key + value pairs of search criteria
   * @return Array of values
   */

  const searchVideos = (
    criteriaObject
  ): Promise<AxiosResponse<Video[]> | ApiError> => {
    LoadingToast(`Searching . . .`);
    return client({
      method: `POST`,
      url: `${process.env.API}${process.env.API_SEARCH_VIDEO}`,
      data: criteriaObject,
    })
      .then(
        (results: AxiosResponse<Video[]>): AxiosResponse<Video[]> => results
      )
      .catch(
        (error: AxiosError): ApiError => ({
          responseCode: Number(error.code),
          message: `Problem seacrhing videos`,
          error,
        })
      );
  };

  return (
    <ApiContext.Provider
      value={{ logIn, registerUser, editUser, searchVideos }}
    >
      {children}
    </ApiContext.Provider>
  );
}
