import React from "react";
import MenuItem from "./MenuItem";
import Card from "./MenuCatagory";
import Order from "./MenuItemOrder";
import "./MenuItemList.scss";

export default class MenuItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Order: null,
      displayOrder: false
    };
  }
  handleSelectItem = id => {
    this.setState(state => ({
      Order: id,
      displayOrder: !state.displayOrder
    }));
  };
  render() {
    const items = this.props.location.data.items;
    const order = this.props.location.order;
    const renderItems = Object.keys(items).map(item => (
      <div key={items[item].id} className="MenuItems--Content">
        <MenuItem
          id={items[item].id}
          item={items[item]}
          onSelectItem={this.handleSelectItem}
        />
        {this.state.displayOrder ? (
          items[item].id === this.state.Order ? (
            <Order id={items[item].id} item={items[item]} order={order} />
          ) : null
        ) : null}
      </div>
    ));
    return (
      <div className="MenuItems">
        <Card
          image={this.props.location.data.pic}
          name={this.props.location.data.name}
          description={this.props.location.data.description}
        />
        {renderItems}
      </div>
    );
  }
}
