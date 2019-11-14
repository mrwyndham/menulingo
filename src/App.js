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
import ItemInformation from "./components/pages/menu/itemInformation/ItemInformation";
import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }
  handleOrder = order => {
    let combined = this.state.orders.concat(order);
    this.setState(() => ({
      orders: combined
    }));
  };
  render() {
    const clientData = {
      burgers: {
        id: 1,
        name: "burgers",
        description: "All 100% Beef, All Angus",
        pic:
          "https://images.unsplash.com/photo-1570250386140-243b6c5c719d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ",
        items: {
          hamburger: {
            id: 1,
            name: "Hamburger",
            price: "15.00",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1558980664-1db506751c6c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          },
          cheeseburger: {
            id: 2,
            name: "Cheeseburger",
            price: "18.00",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          },
          cheeseburger1: {
            id: 3,
            name: "Cheeseburger",
            price: "18.00",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          },
          cheeseburger2: {
            id: 4,
            name: "Cheeseburger",
            price: "18.00",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          },
          cheeseburger3: {
            id: 5,
            name: "Cheeseburger",
            price: "18.00",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          },
          cheeseburger4: {
            id: 6,
            name: "Cheeseburger",
            price: "18.00",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          }
        }
      },
      drinks: {
        id: 2,
        name: "drinks",
        description: "Get Hydrated!?",
        pic:
          "https://images.unsplash.com/photo-1572625560245-6283a1867c18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ",
        items: {
          pinocolada: {
            id: 7,
            name: "Pino Colada",
            price: "12.00",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          },
          mojito: {
            id: 8,
            name: "Mojito",
            price: "5.00",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          }
        }
      },
      sides: {
        id: 3,
        name: "sides",
        description: "A timeless assortment",
        pic:
          "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ",
        items: {
          chips: {
            id: 9,
            name: "Chips",
            price: "10.00",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          },
          cigarettes: {
            id: 10,
            name: "Rothman Reds",
            price: "2.00",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          },
          merakas: {
            id: 11,
            name: "marakas",
            price: "0.50",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          }
        }
      },
      pizza: {
        id: 4,
        name: "pizza",
        items: {
          BBQ: {
            id: 12,
            name: "BBQ",
            price: "0.50",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          }
        },
        description: "This is a description",
        pic:
          "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
      },
      pizza1: {
        id: 5,
        name: "pizza",
        items: {
          BBQ: {
            id: 13,
            name: "BBQ",
            price: "0.50",
            description: "This is a description",
            pic:
              "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          }
        },
        description: "This is a description",
        pic:
          "https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
      }
    };
    const clientStyle = {
      header: {
        title: {
          name: "PO PO CHINESE",
          font: "'Yeon Sung', cursive",
          color: "#afafaf",
          size: "3.75vh"
        },
        logo: Logo,
        backgroundImage: "",
        backgroundColor: "#333333"
      },
      menu: {
        backgroundColor: "#333333",
        backgroundImage: "",
        menuItemList: {
          itemInformation: {}
        }
      },
      order: {},
      rate: {},
      about: {},
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
                catagories={clientData}
                style={clientStyle.menu}
                order={this.handleOrder}
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
              <Order orders={this.state.orders} style={clientStyle.order} />
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
