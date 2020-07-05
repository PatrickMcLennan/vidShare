import { AxiosError } from "axios";

export interface ApiError {
  responseCode: number;
  message: string;
  error: AxiosError;
}
