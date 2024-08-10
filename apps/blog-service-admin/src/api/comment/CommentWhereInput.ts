import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
};
