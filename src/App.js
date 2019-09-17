import React from 'react';
import './App.css';
import TitleBar from "./components/titlebar"

import GuessBox from "./components/guessBox"


class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click an Image to Begin!"
}
resetScore = () =>{
  this.setState({
    score: 0, 
    message: "Incorrect :("
    
  })
}
addScore = () =>{
  if (this.state.topScore > this.state.score){
    this.setState({
      score: this.state.score +1,
      message: "Correct!"
    })
  }
  else{
    this.setState({
      score: this.state.score +1,
      topScore: this.state.topScore +1,
      message: "Correct!"
    })
  }

}


render(){
  console.log(this.state.score)
  return (
    <>
    <TitleBar score= {this.state.score} topScore={this.state.topScore} message={this.state.message}/>
    <GuessBox addScore = {this.addScore} resetScore = {this.resetScore} />
    </>
  )
}
  

  
}

export default App;
