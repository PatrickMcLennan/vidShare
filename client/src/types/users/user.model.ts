import { Video } from "../videos/video.model";

export interface User {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  videos: Video[];
  savedVideos: Video[];
}
