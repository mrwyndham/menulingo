import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "./assets/logo/icon_primary.svg";
import Menu from "./components/pages/Menu";
import Start from "./components/pages/Start";
import Order from "./components/pages/Order";
import Rate from "./components/pages/Rate";
import About from "./components/pages/About";
import Header from "./components/layout/header/Header";
import Navbar from "./components/layout/navbar/Navbar";
import MenuItemList from "./components/pages/menu/MenuItemList";
import ItemInformation from "./components/pages/menu/MenuItemControl/Information/ItemInformation";
import "./App.scss";

export default class App extends Component {
  state = {
    orders: [],
    selectedOrderID: null
  };

  //Manages OrderItemControls
  handleSelectOrderItem = id => {
    this.state.selectedOrderID === id
      ? this.setState(state => ({ selectedOrderID: null }))
      : this.setState(state => ({ selectedOrderID: id }));
  };

  //Adds an Item to the order and only updates amount if a duplicate order is found
  handleOrder = order => {
    let orderIndex = this.state.orders.findIndex(x => x.id === order.id);
    if (orderIndex !== -1) {
      let duplicateState = [...this.state.orders];
      duplicateState[orderIndex].amount =
        this.state.orders[orderIndex].amount + order.amount;
      this.setState(() => ({ orders: duplicateState }));
    } else {
      this.setState(() => ({ orders: [order, ...this.state.orders] }));
    }
  };
  //Removes an order from state
  handleRemoveOrder = order => {
    let duplicateState = [...this.state.orders];
    let updatedState = duplicateState.filter(x => x.id !== order.id);
    this.setState(() => ({ orders: updatedState }));
  };
  //Updates an added order in the state
  handleChangeOrder = order => {
    let orderIndex = this.state.orders.findIndex(x => x.id === order.id);
    let duplicateState = [...this.state.orders];
    duplicateState[orderIndex].amount = order.amount;
    this.setState(() => ({ orders: duplicateState }));
  };
  render() {
    const clientData = {
      menu: {
        catagories: {
          burgers: {
            id: 1,
            name: "burgers",
            description: "All 100% Beef, All Angus",
            pic:
              "https://images.unsplash.com/photo-1570250386140-243b6c5c719d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ",
            items: [
              {
                id: 1,
                name: "Hamburger",
                price: "15.00",
                description: "This is a description",
                pic:
                  "https://images.unsplash.com/photo-1558980664-1db506751c6c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
              },
              {
                id: 2,
                name: "Cheeseburger",
                price: "18.00",
                description: "This is a description",
                pic:
                  "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
              },
              {
                id: 3,
                name: "Cheeseburger",
                price: "18.00",
                description: "This is a description",
                pic:
                  "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
              },
              {
                id: 4,
                name: "Cheeseburger",
                price: "18.00",
                description: "This is a description",
                pic:
                  "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
              },
              {
                id: 5,
                name: "Cheeseburger",
                price: "18.00",
                description: "This is a description",
                pic:
                  "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
              },
              {
                id: 6,
                name: "Cheeseburger",
                price: "18.00",
                description: "This is a description",
                pic:
                  "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
              }
            ]
          },
          drinks: {
            id: 2,
            name: "drinks",
            description: "Get Hydrated!?",
            pic:
              "https://images.unsplash.com/photo-1572625560245-6283a1867c18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ",
            items: [
              {
                id: 7,
                name: "Pino Colada",
                price: "12.00",
                description: "This is a description",
                pic:
                  "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
              },
              {
                id: 8,
                name: "Mojito",
                price: "5.00",
                description: "This is a description",
                pic:
                  "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
              }
            ]
          },
          sides: {
            id: 3,
            name: "sides",
            description: "A timeless assortment",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ",
            items: [
              {
                id: 9,
                name: "Chips",
                price: "10.00",
                description: "This is a description",
                pic:
                  "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
              },
              {
                id: 10,
                name: "Rothman Reds",
                price: "2.00",
                description: "This is a description",
                pic:
                  "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
              },
              {
                id: 11,
                name: "marakas",
                price: "0.50",
                description: "This is a description",
                pic:
                  "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
              }
            ]
          },
          pizza: {
            id: 4,
            name: "pizza",
            items: [
              {
                id: 12,
                name: "BBQ",
                price: "0.50",
                description: "This is a description",
                pic:
                  "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
              }
            ],
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          }
        },
        currency: {
          symbol: "$",
          code: "USD"
        }
      }
    };
    const clientStyle = {
      header: {
        title: {
          name: "宝宝中文 Po Po",
          font: "'Yeon Sung', cursive",
          color: "#afafaf",
          size: "3.75vh"
        },
        logo: Logo,
        backgroundImage: "",
        backgroundColor: "#333333"
      },
      menu: {
        backgroundColor: "#ffffff",
        backgroundImage: "",
        menuItemList: {
          itemInformation: {}
        }
      },
      order: {},
      rate: {},
      about: {
        introduction: {
          data: {
            backgroundColor: "none"
          },
          title: {
            data: {
              text: "Welcome",
              font: "'Yeon Sung', cursive",
              color: "#afafaf",
              size: "3.75vh"
            }
          },
          tagline: {
            data: {
              text: "This is Po Po, This is Chinese",
              font: "'Yeon Sung', cursive",
              color: "#afafaf",
              size: "3.75vh"
            }
          }
        },
        description: {
          data: {
            text:
              "We serve chinese food here. Please eat from our tables. No dogs allowed",
            font: "'Yeon Sung', cursive",
            color: "#afafaf",
            size: "3.75vh"
          }
        },
        time: {
          data: {}
        }
      },
      navbar: {
        backgroundImage: "",
        backgroundColor: "#333333",
        color: "#afafaf"
      }
    };
    return (
      <div className="overflow">
        <Router>
          <div className="fixed-top">
            <Header style={clientStyle.header} />
          </div>
          <Route
            path="/"
            exact
            component={() => (
              <Menu
                catagories={clientData.menu.catagories}
                style={clientStyle.menu}
                order={this.handleOrder}
                currency={clientData.menu.currency}
              />
            )}
          />
          <Route path="/catagory/:catagory" exact component={MenuItemList} />
          <Route
            path="/catagory/:catagory/:item"
            exact
            component={ItemInformation}
          />
          <Route
            path="/order"
            component={() => (
              <Order
                orders={this.state.orders}
                style={clientStyle.menu.order}
                currency={clientData.menu.currency}
                orderUpdate={[this.handleChangeOrder, this.handleRemoveOrder]}
                selectOrderItem={this.handleSelectOrderItem}
                selectOrderItemState={this.state.selectedOrderID}
              />
            )}
          />
          <Route
            path="/rate"
            component={() => <Rate style={clientStyle.rate} />}
          />
          <Route
            path="/about"
            component={() => <About style={clientStyle.about} />}
          />
          <Route
            path="/start"
            component={() => <Start style={clientStyle.start} />}
          />
          <div className="fixed-bottom">
            <Navbar style={clientStyle} data={clientData} />
          </div>
        </Router>
      </div>
    );
  }
}
