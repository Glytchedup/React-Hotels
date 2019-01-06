import React, { Component } from 'react'

class HotelItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }
  
  render() {
    const hotelEntries = this.props.entries
    const listItems = hotelEntries.map(this.createTasks)
return(
<React.Fragment>
  <ul className="theList">{listItems}</ul>
</React.Fragment>
) 
  }
}

export default HotelItems
