import React, { useState } from "react";
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

const App = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrderID, setSelectedOrderID] = useState(null);
  // state = {
  //   orders: [],
  //   selectedOrderID: null
  // };

  //Manages OrderItemControls
  const handleSelectOrderItem = id => {
    selectedOrderID === id ? setSelectedOrderID(null) : setSelectedOrderID(id);
  };

  //Adds an Item to the order and only updates amount if a duplicate order is found
  const handleOrder = order => {
    console.log(order);
    let orderIndex = orders.findIndex(x => x.id === order.id);
    if (orderIndex !== -1) {
      let duplicateState = [...orders];
      duplicateState[orderIndex].amount =
        orders[orderIndex].amount + order.amount;
      console.log(duplicateState[orderIndex].amount);
      setOrders(duplicateState);
    } else {
      setOrders([order, ...orders]);
    }
  };
  //Removes an order from state
  const handleRemoveOrder = order => {
    let duplicateState = [...orders];
    let updatedState = duplicateState.filter(x => x.id !== order.id);
    setOrders(updatedState);
  };
  //Updates an added order in the state
  const handleChangeOrder = order => {
    let orderIndex = orders.findIndex(x => x.id === order.id);
    let duplicateState = [...orders];
    duplicateState[orderIndex].amount = order.amount;
    setOrders(duplicateState);
  };

  const handlePay = () => {
    alert("You payed for your order");
  };

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
  const languages = [
    {
      name: "Portuguese",
      flag: (
        <svg
          width="92"
          height="54"
          viewBox="0 0 92 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="92" height="54" fill="#78C800" />
          <path
            d="M4 26.5002L46 4.00024L46 50.0002L4 26.5002Z"
            fill="#FFC800"
          />
          <path d="M88 27.5L46 50L46 4L88 27.5Z" fill="#FFC800" />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="30"
            y="11"
            width="32"
            height="32"
          >
            <path
              d="M62 27C62 35.8366 54.8366 43 46 43C37.1634 43 30 35.8366 30 27C30 18.1634 37.1634 11 46 11C54.8366 11 62 18.1634 62 27Z"
              fill="#1CB0F6"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M62 27C62 35.8366 54.8366 43 46 43C37.1634 43 30 35.8366 30 27C30 18.1634 37.1634 11 46 11C54.8366 11 62 18.1634 62 27Z"
              fill="#1CB0F6"
            />
            <path
              d="M29 29.684L30.4696 20L63.3175 27.2258L61.8479 36.9097L29 29.684Z"
              fill="white"
            />
          </g>
        </svg>
      )
    },
    {
      name: "French",
      flag: (
        <svg
          width="93"
          height="54"
          viewBox="0 0 93 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="92" height="54" fill="white" />
          <rect width="30.6667" height="54" fill="#19B0F9" />
          <rect x="61.4" width="30.6667" height="54" fill="#FF4B4D" />
        </svg>
      )
    },
    {
      name: "English",
      flag: (
        <svg
          width="62"
          height="36"
          viewBox="0 0 62 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="62"
            height="36"
          >
            <rect width="61.875" height="36" rx="10" fill="#C4C4C4" />
          </mask>
          <g mask="url(#mask0)">
            <rect width="62" height="36" fill="white" />
            <rect y="7.875" width="61.875" height="4.5" fill="#E02424" />
            <rect width="61.875" height="4.5" fill="#E02424" />
            <rect y="15.75" width="61.875" height="4.5" fill="#E02424" />
            <rect y="23.6249" width="61.875" height="4.5" fill="#E02424" />
            <rect y="31.5" width="61.875" height="4.5" fill="#E02424" />
            <rect width="28.125" height="20.25" fill="#18407E" />
          </g>
        </svg>
      )
    },
    {
      name: "Italian",
      flag: (
        <svg
          width="93"
          height="54"
          viewBox="0 0 93 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="92" height="54" fill="white" />
          <rect width="30.6667" height="54" fill="#2D9809" />
          <rect x="61.4" width="30.6667" height="54" fill="#FF4B4D" />
        </svg>
      )
    },
    {
      name: "Chinese",
      flag: (
        <svg
          width="92"
          height="54"
          viewBox="0 0 92 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="92" height="54" fill="#FF4B4D" />
        </svg>
      )
    }
  ];
  return (
    <div className="overflow">
      <Router>
        <div className="fixed-top">
          <Header style={clientStyle.header} language={languages} />
        </div>
        <Route
          path="/"
          exact
          component={() => (
            <Menu
              catagories={clientData.menu.catagories}
              style={clientStyle.menu}
              order={handleOrder}
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
              orders={orders}
              style={clientStyle.menu.order}
              currency={clientData.menu.currency}
              orderUpdate={[handleChangeOrder, handleRemoveOrder]}
              selectOrderItem={handleSelectOrderItem}
              selectOrderItemState={selectedOrderID}
              handlePay={handlePay}
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
};

export default App;
