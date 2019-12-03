import React, { Component } from "react";
import ImageDiv from "./imageDiv";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.jpg";
import pic6 from "./images/pic6.jpg";
import pic7 from "./images/pic7.jpg";
import pic8 from "./images/pic8.jpg";
import pic9 from "./images/pic9.jpg";
import pic10 from "./images/pic10.jpg";
import pic11 from "./images/pic11.png";
import pic12 from "./images/pic12.jpg";

class GuessBox extends Component {
  state = {
    images: [
      { src: pic1, isClicked: false, id: 1 },
      { src: pic2, isClicked: false, id: 2 },
      { src: pic3, isClicked: false, id: 3 },
      { src: pic4, isClicked: false, id: 4 },
      { src: pic5, isClicked: false, id: 5 },
      { src: pic6, isClicked: false, id: 6 },
      { src: pic7, isClicked: false, id: 7 },
      { src: pic8, isClicked: false, id: 18 },
      { src: pic9, isClicked: false, id: 9 },
      { src: pic10, isClicked: false, id: 10 },
      { src: pic11, isClicked: false, id: 11 },
      { src: pic12, isClicked: false, id: 12 }
    ],
    testState: "Hello"
  };
  shuffleBoard = () => {
    let newArray = this.state.images;

    for (var i = newArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
  };

  onImageClick = value2Check => {
    let newState = this.state.images;
    for (let i = 0; i < newState.length; i++) {
      if (newState[i].id === value2Check) {
        if (newState[i].isClicked === true) {
          this.props.resetScore();
          this.setState({
            images: [
              { src: pic1, isClicked: false, id: 1 },
              { src: pic2, isClicked: false, id: 2 },
              { src: pic3, isClicked: false, id: 3 },
              { src: pic4, isClicked: false, id: 4 },
              { src: pic5, isClicked: false, id: 5 },
              { src: pic6, isClicked: false, id: 6 },
              { src: pic7, isClicked: false, id: 7 },
              { src: pic8, isClicked: false, id: 18 },
              { src: pic9, isClicked: false, id: 9 },
              { src: pic10, isClicked: false, id: 10 },
              { src: pic11, isClicked: false, id: 11 },
              { src: pic12, isClicked: false, id: 12 }
            ],
            testState: "GOODBYE"
          });
          console.log("HEIAJDSKJBAS", this.state);
        } else {
          newState[i].isClicked = true;
          this.props.addScore();
          this.setState({
            images: newState
          });
        }
      }
    }

    this.shuffleBoard();
  };

  componentDidMount() {
    this.shuffleBoard();
  }
  render() {
    console.log("This.state form render", this.state);
    return (
      <div className="container-fluid">
        <div className="gameContent">
          {this.state.images.map(image => (
            <ImageDiv
              imageSrc={image.src}
              onClick={() => this.onImageClick(image.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GuessBox;
