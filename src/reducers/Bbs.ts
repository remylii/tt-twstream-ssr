import { reducerWithInitialState } from "typescript-fsa-reducers";
import { threadActions } from "../actions/ThreadAction";

export interface BbsState {
  threads: Thread[];
  byId?: Thread;
}

export interface Thread {
  id: number;
  title: string;
  comment_count: number;
}

const initialState: BbsState = {
  // threads: []
  threads: [
    {
      id: 1,
      title: "example1",
      comment_count: 2
    },
    {
      id: 2,
      title: "thinking_face",
      comment_count: 0
    }
  ]
};

export const bbsReducer = reducerWithInitialState(initialState).case(
  threadActions.fetchThread,
  (state: BbsState, action: Thread[]) => {
    console.log("fetch thread action");

    return {
      ...state
    };
  }
);
