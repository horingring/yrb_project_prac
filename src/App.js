import React, { Component } from 'react';
import './App.css';
import HeaderArea from './HeaderArea';
import LoginArea from './LoginArea';
import ArticleArea from './ArticleArea';

class App extends Component {
  render(){
    return (
      <div className="App">
        <HeaderArea></HeaderArea>
        <br></br><br></br>
        <LoginArea></LoginArea>
        <br></br><br></br>
        <ArticleArea></ArticleArea>
      </div>
    );
  }
}

export default App;
