import actionCreatorFactory from "typescript-fsa";
import { Thread } from "../reducers/Bbs";

const actionCreator = actionCreatorFactory();

export const threadActions = {
  fetchThread: actionCreator<Thread[]>("FETCH_THREAD")
};
