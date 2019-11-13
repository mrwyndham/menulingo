import React from "react";
import MenuItem from "./MenuItem";
import Card from "./MenuCatagory";
import Order from "./MenuItemOrder";
import "./MenuItemList.scss";

export default class MenuItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: null,
      displayReply: false
    };
  }
  handleSelectItem = id => {
    this.setState(state => ({
      reply: id,
      displayReply: !state.displayReply
    }));
  };
  render() {
    const items = this.props.location.data.items;
    const renderItems = Object.keys(items).map(item => (
      <div className="MenuItems--Content">
        <MenuItem
          key={items[item].id}
          id={items[item].id}
          item={items[item]}
          onSelectItem={this.handleSelectItem}
        />
        {this.state.displayReply ? (
          items[item].id === this.state.reply ? (
            <Order />
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
