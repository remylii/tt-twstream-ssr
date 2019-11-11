import actionCreatorFactory from 'typescript-fsa';
import { Comment } from '../reducers/Bbs';

const actionCreator = actionCreatorFactory();

export const bbsActions = {
  postComment: actionCreator<Comment>('POST_COMMENT')
};
