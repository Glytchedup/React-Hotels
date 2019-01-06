import React, { Component } from "react";
import "./App.css";
import HotelList from "./HotelList";
import HotelItems from "./HotelItems";
import Header from "./header";

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
    var filteredItems = this.state.items.filter(item => {
      return item.key !== key
    });
    this.setState({
      items: filteredItems,
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
    if (localStorage.getItem('items') == null) {
      const items = [];
      items.push(newItem);
      localStorage.setItem('items', JSON.stringify(items));
    } else {
      var items = JSON.parse(localStorage.getItem('items'));
      items.push(newItem);
      localStorage.setItem('items', JSON.stringify(items));
    };
    this.setState({
      items: JSON.parse(localStorage.getItem('items')),
      currentItem: { text: "", key: "" }
    });
  };

  componentWillMount() {
    localStorage.getItem("items") &&
      this.setState({
        items: JSON.parse(localStorage.getItem("items")),
        isLoading: false
      });
  }

  componentDidMount() {
    if (!localStorage.getItem("items")) {
      this.fetchData();
    } else {
      console.log("using data from local storage");
    }
  }

  fetchData() {}

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("items", JSON.stringify(nextState.items));
    localStorage.setItem("itmesDate", Date.now());
  }

  createJSON = e => {
    e.preventDefault();
    console.log("writing JSON");
       var obj = {
         items: []
        };
        
       var array = JSON.parse(localStorage.getItem('items'));
    
        obj.items.push({array});
        
        var json = JSON.stringify(obj);
        
        var fs = require('fs');
        
        fs.writeFile('marsha.json', json, 'utf8');
        
        fs.readFile('marsha.json', 'utf8', function readFileCallback(err, data){
          if (err){
            console.log(err);
          } else {
            obj = JSON.parse(data); //now it an object
            obj.items.push({array}); //add some data
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('marsha.json', json, 'utf8'); // write it back 
          }});
        } 
    
  clearArray= e => {
      e.preventDefault();
      if (localStorage.getItem('items') == null) {
        const items = [];
        console.log("if");
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        var items = JSON.parse(localStorage.getItem('items'));
        items.length = 0;
        console.log("else");
        localStorage.setItem('items', JSON.stringify(items));
      };
      this.setState({
        items: JSON.parse(localStorage.getItem('items')),
        currentItem: { text: "", key: "" }
      });
    };
  render() {
    return (
      <div className="App">
      <Header />
        <HotelList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          clear={this.clearArray}
          createJSON={this.createJSON}
        />
        <HotelItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
