import { Action } from 'typescript-fsa';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../store';
import { bbsActions } from '../actions/BbsAction';
import { Home } from '../components/Home';

export interface HomeActions {
  pushById: (n: number) => Action<number>;
};

function mapDispatchToProps(dispatch: Dispatch<Action<number>>) {
  return {
    pushById: (n: number) => dispatch(bbsActions.pushById(n))
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.bbs);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
