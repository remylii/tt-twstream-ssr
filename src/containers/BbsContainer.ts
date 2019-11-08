import { Action } from 'typescript-fsa';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../store';
import { bbsActions } from '../actions/BbsAction';
import { Comment } from '../reducers/Bbs';
import { Bbs } from '../components/Bbs';

export interface BbsActions {
  postComment: (v: Comment) => Action<Comment>;
};

function mapDispatchToProps(dispatch: Dispatch<Action<Comment>>) {
  return {
    postComment: (v: Comment) => dispatch(bbsActions.postComment(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.bbs);
}

export default connect(mapStateToProps, mapDispatchToProps)(Bbs);

