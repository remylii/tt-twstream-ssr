import actionCreatorFactory from "typescript-fsa";
import { PostComment, Comment } from "../reducers/Comment";

const actionCreator = actionCreatorFactory();

export const commentActions = {
  postComment: actionCreator<PostComment>("POST_COMMENT"),
  fetchComment: actionCreator<Comment[]>("FETCH_COMMENT")
};
