import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../store";
import { threadActions } from "../actions/ThreadAction";
import { Home } from "../components/Home";
import { Thread } from "../reducers/Bbs";

export type HomeProps = {
  threads: Thread[];
};

function mapStateToProps(appState: AppState) {
  return {
    threads: appState.bbs.threads
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchThread: () => dispatch(threadActions.fetchThread([]))
  };
}

export type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
