import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box />
      </header>
    </div>
  );
}
class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [0,0,0,0,0,0,0,-1,1]
    }
  }
  render(){
    return(
      <div className="box">
        {this.state.lists.map((item) => 
          <Lattice act={item}/>
        )}
      </div>
    )
  }
}
class Lattice extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className="lattice">{this.props.act==-1?'':this.props.act==0?'X':this.props.act==1?'O':''}</div>
    )
  }
}

export default App;
