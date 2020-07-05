import { AxiosError } from "axios";

declare type SubmitHandler = (formValues) => void;

declare type EmptyObject = Record<string, unknown>;

declare interface ApiError {
  responseCode: number;
  message: string;
  error: AxiosError;
}

declare interface IComment {
  id: string;
  submittedBy: IUser;
  timestamp: Date;
  content: string;
}

declare interface IMessage {
  id: string;
  author: IUser;
  recipient: IUser;
  timestamp: Date;
  unread: boolean;
}

declare interface IUser {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  videos: IVideo[];
  savedVideos: IVideo[];
}

declare interface IVideo {
  id: string;
  description: string;
  title: string;
  url: string;
  submittedBy?: IUser;
  rating?: number;
  quality?: number;
  comments?: IComment[];
  source: VideoSource;
}

declare enum ViewMode {
  main = `MAIN`,
  leftSidebar = `LEFT_SIDEBAR`,
  rightSidebar = `RIGHT_SIDEBAR`,
}

declare enum VideoSource {
  youtube = `YOUTUBE`,
  vimeo = `VIMEO`,
  other = `OTHER`,
}
