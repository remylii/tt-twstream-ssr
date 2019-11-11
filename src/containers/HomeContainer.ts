import { connect } from 'react-redux';
import { AppState } from '../store';
import { Home } from '../components/Home';

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.bbs);
}

export default connect(mapStateToProps)(Home);
