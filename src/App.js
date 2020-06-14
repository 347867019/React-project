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
      lists: [-1,-1,-1,-1,-1,-1,-1,-1,-1],
      history:[],
      item: false
    }
    this.clicklattice = this.clicklattice.bind(this)
  }
  clicklattice(index){
    // console.log(index)
    // console.log(this)
    // console.log(this.state.lists[index] === -1)
    // console.log(this.state.history)
    if(this.state.lists[index] !== -1)return true
    const lists = this.state.lists
    if(this.state.item){
      lists[index] = 0
    }else{
      lists[index] = 1
    }
    const history = this.state.history
    history.push([...lists])
    this.setState({
      lists: lists,
      item: !this.state.item,
      history: [...history]
    })
  }
  fallback(index){
    console.log(this.state.history)
    const lists = this.state.history[index]
    this.setState({
      lists: lists,
      item: index%2 === 0,
      history: this.state.history.slice(0,index+1)
    })
    // console.log(lists)
  }
  render(){
    return(
      <div className="box">
        {this.state.lists.map((item, index) => 
          <Lattice act = {item} ind = {index} key = {index} clicklattice={this.clicklattice}/>
        )}
        <div>
          {this.state.history.map((item, index) => 
            <div key={index} onClick={this.fallback.bind(this, index)}>{index%2 === 0?'O执行完成，请X开始下棋':'X执行完成，请O开始下棋'}</div>
        )}
        </div>
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
    const index = this.props.ind
    return(
    <div className="lattice" onClick={() => this.props.clicklattice(index)}>{this.props.act === -1?'':this.props.act === 0?'X':this.props.act === 1?'O':''}</div>
    )
  }
}

export default App;
