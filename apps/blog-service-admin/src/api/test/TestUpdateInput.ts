import { InputJsonValue } from "../../types";

export type TestUpdateInput = {
  description?: string | null;
  name?: string | null;
  relatedPost?: string | null;
  status?: "Option1" | null;
  test?: InputJsonValue;
};
