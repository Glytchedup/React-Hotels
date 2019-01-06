import React, { Component } from "react";
import "./App.css";
import HotelList from "./HotelList";
import HotelItems from "./HotelItems";
import marsha from "./marsha.json";
import extract from "./data.js";

class App extends Component {
  inputElement = React.createRef();
  
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
  }
  
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };
  
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
  };
  
  componentWillMount() {
    localStorage.getItem('items') && this.setState({
      hotels: JSON.parse(localStorage.getItem('items')),
      isLoading: false
    })
  }
  
  componentDidMount() {
    if(!localStorage.getItem('items')){
      this.fetchData();
    } else {
console.log('using data from local storage')
    }
  }

  fetchData() {}
  
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("items", JSON.stringify(nextState.items));
    localStorage.setItem("itmesDate", Date.now());
  }

  render() {
    return (
      <div className="App">
        <HotelList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <HotelItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
