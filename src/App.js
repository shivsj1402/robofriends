import React from 'react';
import CardList from './cardList'
import SearchBox from './searchBox'
import Scroll from './scroll'
import ErrorBoundaries from "./errorBoudaries";
import 'tachyons';
import './App.css';
 

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      robots: [],
      serachfield: ''
    }
  }
  onSearchChange = (e) =>{
    this.setState({
      serachfield: e.target.value
    })
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users =>this.setState({robots:users}))
  }


  render(){ 
    const filteredRobots = this.state.robots.filter((robot)=>{
      return robot.name.toLowerCase().includes(this.state.serachfield.toLowerCase());
    });
    if(this.state.robots.length===0){
      return <h1>LOADING</h1>
    }else{
      return (
        <div className='tc'>
          <h1>RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
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

export default App;
