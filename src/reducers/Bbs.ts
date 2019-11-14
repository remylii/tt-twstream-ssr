import { reducerWithInitialState } from "typescript-fsa-reducers";

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

export const bbsReducer = reducerWithInitialState(initialState);
