import { User } from "../users/user.model";

export interface Comment {
  id: string;
  submittedBy: User;
  timestamp: Date;
  content: string;
}
