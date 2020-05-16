import React from 'react';
import CardList from './cardList'
import SearchBox from './searchBox'
import Scroll from './scroll'
import ErrorBoundaries from "./errorBoudaries";
import { connect } from 'react-redux';
import {setSerachField , requestRobots} from './Actions'
import 'tachyons';
import './App.css';

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

  componentDidMount(){
    this.props.onRequestRobots();
  }


  render(){ 
    const { serachField, onSearchChange, robots , isPending} = this.props;
    const filteredRobots = robots.filter((robot)=>{
      return robot.name.toLowerCase().includes(serachField.toLowerCase());
    });
    if(isPending){
      return <h1>LOADING</h1>
    }else{
      return (
        <div className='tc'>
          <h1>RobotFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundaries>
              <CardList robots={filteredRobots} />
            </ErrorBoundaries>
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
