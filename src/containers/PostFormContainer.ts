import { Action } from "typescript-fsa";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../store";
import { commentActions } from "../actions/CommentAction";
import { PostComment } from "../reducers/Comment";
import PostForm from "../components/PostForm";
import { RouteComponentProps } from "react-router";

export interface PostFormActions {
  postComment: (v: PostComment) => Action<PostComment>;
}

export type PostFormProps = { thread_id: number } & RouteComponentProps;

function mapDispatchToProps(dispatch: Dispatch<Action<PostComment>>) {
  return {
    postComment: (v: PostComment) => dispatch(commentActions.postComment(v))
  };
}

function mapStateToProps(appState: AppState, props: PostFormProps) {
  console.log(props);
  return Object.assign({}, appState, { props });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
