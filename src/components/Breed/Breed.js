import React, { Component } from "react";
import "./Breed.css";

class Breed extends Component {
  state = {
    imageUrl: "https://media.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg",
    selectBreed: null,
  };
  componentDidUpdate() {
    if (this.props.breed !== this.state.selectBreed) {
      this.setState({
        selectBreed: this.props.breed,
      });
      this.fetchImage();
    }
  }

  fetchImage = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${this.props.breed}/images/random`
    );
    const data = await response.json();
    const imageUrl = data.message;
    this.setState({
      imageUrl: imageUrl,
    });
  };

  render() {
    return (
      <div className="image-container">
        <img className="image-card" alt="dog" src={this.state.imageUrl} />
      </div>
    );
  }
}
export default Breed;
