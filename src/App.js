import React from 'react';
import CardList from './cardList'
import SearchBox from './searchBox'
import {robots} from './robots'
import 'tachyons';
 

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      robots: robots,
      serachfield: ''
    }
  }
  onSearchChange = (e) =>{
    this.setState({
      serachfield: e.target.value
    })
    
  }
  render(){ 
    const filteredRobots = this.state.robots.filter((robot)=>{
      return robot.name.toLowerCase().includes(this.state.serachfield.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>RobotFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
