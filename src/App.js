import React from 'react';
import { connect } from 'react-redux';
import {setSerachField , requestRobots} from './Actions'
import 'tachyons';
import './App.css';
import MainPage from './Components/MainPage';

const mapStateToProps = state => {
  return {
    serachField : state.searchRobots.serachField,
    isPending :state.requestRobots.isPending,
    robots :state.requestRobots.robots,
    error :state.requestRobots.error

  }
}
 
const mapDispatchToProps = (dispatch) =>{
  return {
    onSearchChange: (event) => dispatch(setSerachField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {
  render(){ 
    return <MainPage {...this.props}/>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
