import React from "react";
import MenuItem from "./MenuItem";
import MenuCatagory from "./MenuCatagory";
import Order from "./MenuItemControls";
import "./MenuItemList.scss";

export default class MenuItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    };
  }

  handleSelectItem = id => {
    this.state.selectedItem === id
      ? this.setState(state => ({ selectedItem: null }))
      : this.setState(state => ({ selectedItem: id }));
  };
  render() {
    const {
      data: { items, pic, name, description },
      order,
      catagory,
      currency
    } = this.props.location;

    const { selectedItem } = this.state;

    const renderItems = items.map(item => (
      <div key={item.id} className="MenuItemList--Content">
        <MenuItem
          id={item.id}
          item={item}
          currency={currency}
          onSelectItem={this.handleSelectItem}
        />

        {item.id === selectedItem ? (
          <Order
            id={item.id}
            item={item}
            order={order}
            catagory={catagory}
            currency={currency}
          />
        ) : null}
      </div>
    ));
    return (
      <div className="MenuItemList">
        <MenuCatagory image={pic} name={name} description={description} />
        {renderItems}
      </div>
    );
  }
}
