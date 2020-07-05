import { VideoSource } from "./video-source.enum";
import { Comment } from "./comment.interface";
import { User } from "../users/user.model";

export interface Video {
  id: string;
  description: string;
  title: string;
  url: string;
  submittedBy?: User;
  rating?: number;
  quality?: number;
  comments?: Comment[];
  source: VideoSource;
}
