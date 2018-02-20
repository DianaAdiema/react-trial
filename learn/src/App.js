import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state        = {value:'', list: []};
    this.handleChange = this.handleChange.bind(this);
    this.addTodo      = this.addTodo.bind(this);
    this.removeTodo   = this.removeTodo.bind(this);
    this.markDone     = this.markDone.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone  = this.onClickDone.bind(this);
  }
  
  handleChange(input){
    this.setState({
      value: input
    });
  }

  addTodo(input){
    let listArray = this.state.list;
    listArray.push(input);
    
    this.setState({
      list: listArray,
      value:''
    });

  }

  removeTodo(input){
    let listArray = this.state.list;

    listArray.splice(input, 1);
    this.setState({listArray: listArray});

  }

  markDone(input){
    let listArray = this.state.list;
    var todo = listArray[input];
    listArray.splice(input, 1);
    todo.done = !todo.done;
    todo.done ? listArray.push(todo) : listArray.unshift(todo);
    this.setState({listArray: listArray});  
  }

  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }


  render() {
    return (
      <div className="App">
      <div className='content'>
      <h1 > Todo List </h1>
         
          <input onChange={ (e)=>this.handleChange(e.target.value) } value={this.state.value}   type='text'/>
          <button onClick = { (e) => this.addTodo(this.state.value)}>Add to List</button>
          <ul>
            {this.state.list.map( (val) => <li> {val} </li>)}
          </ul>
       
       
     
      </div>
      

       
      </div>
    );
  }
}

export default App;
