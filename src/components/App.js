import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import { FetchButton } from './FetchButton';
import {User} from './User';

class App extends React.Component {
  render() {
    console.log(this.props)
    const { isFetching, startFetching, data, error} = this.props;
    return(
      <div className="app">
      <User user={data} error={error}/>
        <FetchButton 
          isFetching={isFetching} 
          startFetching={startFetching}
        />
      </div>
    );
  } 
}

const mapStateToProps = state => ({
  isFetching: state.fetching,
  data: state.data,
  error: state.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  startFetching: actions.apiRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);