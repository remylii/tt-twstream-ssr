import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { bbsActions } from '../actions/BbsAction';

export interface BbsState {
  threads: Thread[];
  byId?: Thread;
};

export interface Thread {
  id:    number;
  title: string;
  comments: Comment[];
};

export interface Comment {
  id:        number;
  thread_id: number;
  author:    string;
  password:  string;
  datetime:  string;
  message:   string;
};


const initialState: BbsState = {
  // threads: []
  threads: [
    {
      id: 1,
      title: "example1",
      comments: [
        {
          id: 1,
          thread_id: 1,
          author: "sample",
          password: "xxx",
          datetime: "2019-11-11 11:11:11",
          message: "texttexttexttexttexttexttexttext"
        }
      ]
    },
    {
      id: 2,
      title: "thinking_face",
      comments: []
    }
  ]
};

export const bbsReducer = reducerWithInitialState(initialState)
  .case(bbsActions.postComment, (state, action) => {
    console.log(action);
    return state;
  });
