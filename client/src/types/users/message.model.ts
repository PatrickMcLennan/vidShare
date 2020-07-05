import { User } from "./user.model";

export interface IMessage {
  id: string;
  author: User;
  recipient: User;
  timestamp: Date;
  unread: boolean;
}
