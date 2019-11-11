import { Action } from 'typescript-fsa';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../store';
import { bbsActions } from '../actions/BbsAction';
import { Comment } from '../reducers/Bbs';
import { Bbs } from '../components/Bbs';
import { RouteComponentProps } from 'react-router';

export interface BbsActions {
  postComment: (v: Comment) => Action<Comment>;
};

function mapDispatchToProps(dispatch: Dispatch<Action<Comment>>) {
  return {
    postComment: (v: Comment) => dispatch(bbsActions.postComment(v)),
  };
}

export type BbsProps = {} & RouteComponentProps<{id: string}>;

function mapStateToProps(appState: AppState, props: BbsProps) {
  const { id } = props.match.params;
  return Object.assign({}, appState.bbs, { id });
}

export default connect(mapStateToProps, mapDispatchToProps)(Bbs);

