import { reducerWithInitialState } from "typescript-fsa-reducers";
import { commentActions } from "../actions/CommentAction";

export interface PostComment {
  thread_id: number;
  author: string;
  password: string;
  datetime: string;
  message: string;
}

export interface Comment extends PostComment {
  id: number;
}

export interface CommentState {
  byId: {
    [k: number]: Comment[];
  };
}

const intialState: CommentState = {
  byId: {
    1: [
      {
        id: 1,
        thread_id: 1,
        author: "sample",
        password: "xxx",
        datetime: "2019-11-11 11:11:11",
        message: "texttexttexttexttexttexttexttext"
      }
    ]
  }
};

export const commentReducer = reducerWithInitialState(intialState).case(
  commentActions.postComment,
  (state: CommentState, action: PostComment) => {
    console.log("action.postComment");
    console.log(action);
    return state;
  }
);
