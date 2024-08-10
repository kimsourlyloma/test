import { Post } from "../post/Post";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  updatedAt: Date;
};
