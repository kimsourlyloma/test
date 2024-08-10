import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  relatedPost?: SortOrder;
  status?: SortOrder;
  test?: SortOrder;
  updatedAt?: SortOrder;
};
