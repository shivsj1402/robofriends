import React from "react";

class ErrorBoundaries extends React.Component {
    constructor(props){
      super(props);
      this.state ={
          hasError:false
      }
    }

    componentDidCatch(error, info){
        this.setState({
            hasError:true
        });
    }

    render(){
        if(this.state.hasError){
            return (<h1>On NO, Thats not good!</h1>);
        }
        return(this.props.children);
    }
  
}

export default ErrorBoundaries;