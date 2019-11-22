import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../store";
import { Thread } from "../reducers/Bbs";
import { Comment, PostComment } from "../reducers/Comment";
import { RouteComponentProps } from "react-router";
import { commentActions } from "../actions/CommentAction";
import { Bbs } from "../components/Bbs";

export type BbsProps = {
  thread: Thread | undefined;
  comments: Comment[];
} & RouteComponentProps<{ id: string }>;

function mapStateToProps(appState: AppState, props: BbsProps) {
  const { id } = props.match.params;
  const thread_id = id ? parseInt(id, 10) : 0;
  const thread = appState.bbs.threads.find(th => th.id === thread_id);
  const comments =
    appState.comments.byId[thread_id] &&
    appState.comments.byId[thread_id].length > 0
      ? appState.comments.byId[thread_id]
      : [];

  return Object.assign({}, { thread, comments, id });
}

export interface PostFormActions {
  postComment: (v: PostComment) => Action<PostComment>;
  fetchComment: () => Action<Comment[]>;
}

function mapDispatchToProps(
  dispatch: Dispatch<Action<PostComment | Comment[]>>
) {
  return {
    postComment: (v: PostComment) => dispatch(commentActions.postComment(v)),
    fetchComment: () => dispatch(commentActions.fetchComment([]))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bbs);
