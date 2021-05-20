import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Select from "./components/Select/Select";
import Breed from "./components/Breed/Breed";

class App extends Component {
  state = {
    breedsList: null,
    selectBreed: null,
    error: false,
  };
  componentDidMount() {
    this.fetchAllBreeds();
  }

  fetchAllBreeds = async () => {
    try {
      //try to get dada
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      if (response.ok) {
        //Check if status code is 200
        const data = await response.json();
        this.setState({
          breedsList: Object.keys(data.message),
        });
      } else {
        this.setState({
          error: true,
        });
        alert("Sorry, can not display the data!");
      }
    } catch (e) {
      //Code will jump here if there is a network problem
      this.setState({
        error: true,
      });
      alert("Sorry, can not display the data!");
    }
  };
  selectHandler = (breed) => {
    this.setState({
      selectBreed: breed,
    });
  };
  render() {
    console.log(this.state.selectBreed);
    return (
      <div className="App">
        <Menu />
        <Select
          breedsList={this.state.breedsList}
          onSelect={this.selectHandler}
          isError={this.state.error}
        />
        <Breed breed={this.state.selectBreed} />
      </div>
    );
  }
}
export default App;
