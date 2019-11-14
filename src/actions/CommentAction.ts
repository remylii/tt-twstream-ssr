import actionCreatorFactory from "typescript-fsa";
import { PostComment } from "../reducers/Comment";

const actionCreator = actionCreatorFactory();

export const commentActions = {
  postComment: actionCreator<PostComment>("POST_COMMENT")
};
