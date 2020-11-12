import React from 'react';
import CardList from './cardList'
import SearchBox from './searchBox'
import Scroll from './scroll'
import ErrorBoundaries from "./errorBoudaries";
import 'tachyons';
import './MainPage.css';
import Header from './Header';

class MainPage extends React.Component {

  componentDidMount(){
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, serachField } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(serachField.toLowerCase());
    })
  }

  render(){ 
    const { onSearchChange, isPending} = this.props;
    if(isPending){
      return <h1>LOADING</h1>
    }else{
      return (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundaries>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundaries>
          </Scroll>
        </div>
      );
    }
  }
}

export default MainPage;
