import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css'
var countSlides = 0;
var slides = [
  /*'https://pp.userapi.com/c854424/v854424310/47687/uNjNXj3_rfU.jpg',
  'https://pp.userapi.com/c854424/v854424310/4761b/ImcnYHX19hA.jpg',
  'https://pp.userapi.com/c854424/v854424310/47579/fKAKOzJps7U.jpg', 
  'https://pp.userapi.com/c854424/v854424310/474d7/hMAJ6ufOh3s.jpg',
  'https://pp.userapi.com/c854424/v854424310/4748f/LU_8Xx-PawQ.jpg'*/
]
class App extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.state = ({
      CurrentSlide: 0
    })
  }
  handleSubmit(event) {
    slides[countSlides] = this.input.current.value;
    countSlides++;
    event.preventDefault();
    render(<App />, document.getElementById('root'));
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
    
    console.log("slides", slides[this.state.CurrentSlide], this.state.CurrentSlide)
    return (
      <div className="container">
        
        <form className = "leftmarg"onSubmit={this.handleSubmit} method="post">
        <label>
          <input type="text"  ref={this.input} placeholder="Input image link"/>
        </label>
        
        <button type="submit" class="submit" name="submitbtn" value="subm">Add</button>
      </form>
        <img src={slides[this.state.CurrentSlide-1]} className= " previmg"onClick={() => this.PrevButton() } />
        <span className="costyl"><button class = "prev" onClick={() => this.PrevButton()}>←</button>
        <img src={slides[this.state.CurrentSlide]} className= " curimg slid"tabindex="0" />
        <button class="next" onClick={() => this.NextButton() }>→</button></span>
        <img src={slides[this.state.CurrentSlide+1]} className= " nextimg" onClick={() => this.NextButton() } />
      </div>
    )
  }
}
export default App;
render(<App />, document.getElementById('root'));
