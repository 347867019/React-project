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
var win = [
  [0, 1, 2],
  [3, 4 ,5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [-1,-1,-1,-1,-1,-1,-1,-1,-1],
      history:[],
      item: false,
      win:false
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
    }, function(){
      const lists = this.state.lists 
      // console.log(this.state.lists)
      // console.log(win.length)
      for(let i  = 0; i < win.length; i++){
      //  console.log(win[i][0])
      //  console.log(win[i][1])
      //   console.log(win[i][2])
        // if(win[i][0] ==)
        if(lists[index] === lists[win[i][0]] && lists[index] === lists[win[i][1]] && lists[index] === lists[win[i][2]]){
          this.setState({
            win: lists[index]
          })
          return
        }
      }
      
    })
  }
  fallback(index){
    // console.log(this.state.history)
    const lists = this.state.history[index]
    this.setState({
      lists: [...lists],
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
        <div>{this.state.win === 1 ? 'O win' : ''}</div>
        <div>{this.state.win === 0 ? 'X win' : ''}</div>
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
