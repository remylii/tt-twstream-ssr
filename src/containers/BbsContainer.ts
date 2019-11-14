import { connect } from "react-redux";
import { AppState } from "../store";
import { Bbs } from "../components/Bbs";
import { RouteComponentProps } from "react-router";
import { Thread } from "../reducers/Bbs";
import { Comment } from "../reducers/Comment";

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

export default connect(mapStateToProps)(Bbs);
