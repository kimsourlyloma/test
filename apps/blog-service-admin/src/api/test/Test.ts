import { JsonValue } from "type-fest";

export type Test = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  relatedPost: string | null;
  status?: "Option1" | null;
  test: JsonValue;
  updatedAt: Date;
};
