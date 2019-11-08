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
      title: "unko",
      comments: []
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
  })
  .case(bbsActions.pushById, (state, id) => {
    return {
      ...state,
      byId: state.threads.find(thread => thread.id === id)
    };
  });
