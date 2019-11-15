import React from "react";
import MenuItem from "./MenuItem";
import Card from "./MenuCatagory";
import Order from "./MenuItemControls";
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
    const catagory = this.props.location.catagory;
    const currency = this.props.location.currency;
    const renderItems = items.map(item => (
      <div key={item.id} className="MenuItems--Content">
        <MenuItem
          id={item.id}
          item={item}
          currency={currency}
          onSelectItem={this.handleSelectItem}
        />
        {this.state.displayOrder ? (
          item.id === this.state.Order ? (
            <Order
              id={item.id}
              item={item}
              order={order}
              catagory={catagory}
              currency={currency}
            />
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
