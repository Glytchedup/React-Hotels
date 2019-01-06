import React, { Component } from 'react'

class HotelList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
      }
  render() {
    return (
      <div className="hotelListMain">
        <div className="header">
        <button id='script1' type="script1"> OYV2 Extracts </button>
        <button id='script1' type="script2"> GPO Shops </button>
        <form onSubmit={this.props.createJSON}>
        <button id='script1' type="script2"> Make JSON </button>
        </form>
        <form onSubmit={this.props.addItem}>
           
            <input 
            placeholder="marsha"
            ref={this.props.inputElement}
            value={this.props.currentItem.text}
            onChange={this.props.handleInput}
             />
            <button id='otherbuttons' type="submit"> Add Hotel </button>
          </form>
        <form onSubmit={this.props.clear}>
            <button id='clear' type="clear"> Clear All </button>
          </form>
        </div>
      </div>
    )
  }
}

export default HotelList