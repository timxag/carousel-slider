import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css'
var countSlides;
class App extends Component {
  constructor(){
    super()
    this.state = ({
      CurrentSlide: 0
    })
  }

  PrevButton() {
    if (this.state.CurrentSlide!==0){
    console.log("Click")
    let CurrentSlide = this.state.CurrentSlide;
    this.setState({
      CurrentSlide: --CurrentSlide
    })}
  }

  NextButton() {
    if (this.state.CurrentSlide<countSlides-1){
    let CurrentSlide = this.state.CurrentSlide;
    this.setState({
      CurrentSlide: ++CurrentSlide
    })}
  }
 
  render(){
    let slides = [
      'https://pp.userapi.com/c854424/v854424310/47687/uNjNXj3_rfU.jpg',
      'https://pp.userapi.com/c854424/v854424310/4761b/ImcnYHX19hA.jpg',
      'https://pp.userapi.com/c854424/v854424310/47579/fKAKOzJps7U.jpg',
      'https://pp.userapi.com/c854424/v854424310/474d7/hMAJ6ufOh3s.jpg',
      'https://pp.userapi.com/c854424/v854424310/4748f/LU_8Xx-PawQ.jpg'
    ]
    countSlides = slides.length;
    console.log("slides", slides[this.state.CurrentSlide], this.state.CurrentSlide)
    return (
      <div className="container">
        <img src={slides[this.state.CurrentSlide-1]} className= " previmg" />
        <span className="costyl"><button onClick={() => this.PrevButton()}>←</button>
        <img src={slides[this.state.CurrentSlide]} className= " curimg" />
        <button onClick={() => this.NextButton()}>→</button></span>
        <img src={slides[this.state.CurrentSlide+1]} className= " nextimg" />
      </div>
    )
  }
}

export default App;

render(<App />, document.getElementById('root'));
