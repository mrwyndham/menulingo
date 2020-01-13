import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "./assets/logo/test-logo.svg";
import Menu from "./components/pages/Menu";
import Start from "./components/pages/Start";
import Order from "./components/pages/Order";
import Rate from "./components/pages/Rate";
import About from "./components/pages/About";
import Header from "./components/layout/header/Header";
import Navbar from "./components/layout/navbar/Navbar";
import MenuItemList from "./components/pages/menu/MenuItemList";
import ItemInformation from "./components/pages/menu/MenuItemControl/Information/ItemInformation";
import NexmenuState from "./context/nexmenu/nexmenuState";
import "./App.scss";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrderID, setSelectedOrderID] = useState(null);

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
          pic: "https://dummyimage.com/2560x1600/000000/000000.png",
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
          pic: "https://dummyimage.com/2560x1600/000000/000000.png",
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
          pic: "https://dummyimage.com/2560x1600/000000/000000.png",
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
          pic: "https://dummyimage.com/2560x1600/000000/000000.png"
        }
      },
      currency: {
        symbol: "$",
        code: "USD"
      }
    },
    about: {
      showcase: {
        image:
          "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg",
        text: "Italian \n Streetfood"
      },
      headline: "We are open now",
      tagline:
        "If you like having wild fun and love chinese you will love Po Po",
      gallery:
        "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg",
      info: {
        tagline: "Welcome",
        description:
          "No drama vegetarian quizzo beach days. Ask me anything nothing too complicated I'm really good at working on my body and my mind Arrested Development, ask me anything I'm looking for bacon Catcher in the Rye mountain biking. Catcher in the Rye only looking for something casual I'm pretty laid-back I love the smell of not looking for a penpal I have a crush on."
      },
      openHours: {
        title: "OPEN HOURS",
        table: [
          { day: "Monday", time: "8:00am-9:00pm" },
          { day: "Tuesday", time: "8:00am-9:00pm" },
          { day: "Wednesday", time: "8:00am-9:00pm" },
          { day: "Thursday", time: "8:00am-9:00pm" },
          { day: "Friday", time: "8:00am-9:00pm" },
          { day: "Saturday", time: "8:00am-9:00pm" },
          { day: "Sunday", time: "8:00am-9:00pm" },
          { day: "Holidays", time: "closed" }
        ]
      },
      location: {
        title: "VISIT US",
        address: "5 Dev St, Devington, Western Australia"
      },
      contact: {
        phone: "08 9293 3922",
        email: "reception@popo.br",
        socials: [
          {
            url: "https://www.google.com",
            icon: (
              <svg
                width="100%"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter icon</title>
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            )
          },
          {
            url: "https://www.google.com",
            icon: (
              <svg
                width="100%"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram icon</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            )
          },
          {
            url: "https://www.google.com",
            icon: (
              <svg
                width="100%"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook icon</title>
                <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
              </svg>
            )
          }
        ]
      }
    },
    rate: {
      ratings: ["Food", "Location", "Service", "Drinks"],
      comments: ["Tell us what you thought"]
    }
  };
  const clientStyle = {
    header: {
      title: {
        name: "La Barbosa",
        font: "default",
        color: "#000000",
        size: "4.5vh"
      },
      logo: Logo,
      backgroundImage: "",
      backgroundColor: "#ffffff"
    },
    menu: {
      backgroundColor: "#ffffff",
      backgroundImage: "",
      MenuCatagoryList: {
        MenuCatagory: {
          name: {
            color: "#ffffff"
          },
          description: {
            color: "#ffffff"
          }
        }
      }
    },
    order: {},
    rate: {
      backgroundColor: "none",
      font: "default",
      fontSize: "2vh",
      color: "red",
      fontWeight: "800",
      slider: {
        fill: "#000"
      }
    },
    about: {
      backgroundColor: "none",
      openline: {
        font: "default",
        color: "#000000",
        size: "3.75vh"
      },
      tagline: {
        font: "default",
        color: "#ffffff",
        size: "5vh"
      },
      description: {
        font: "'Yeon Sung', cursive",
        color: "#ffffff",
        size: "3.75vh"
      },
      time: {}
    },
    navbar: {
      backgroundImage: "",
      backgroundColor: "#ffffff",
      color: "#000000"
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
    <NexmenuState>
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
            component={() => (
              <Rate style={clientStyle.style} data={clientData.rate} />
            )}
          />
          <Route
            path="/about"
            component={() => (
              <About style={clientStyle.about} data={clientData.about} />
            )}
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
    </NexmenuState>
  );
};

export default App;
