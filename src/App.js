import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "./assets/logo/test-logo.svg";
import Menu from "./components/pages/Menu";
import Start from "./components/pages/Start";
import Rate from "./components/pages/Rate";
import About from "./components/pages/About";
import Header from "./components/layout/header/Header";
import Navbar from "./components/layout/navbar/Navbar";
import MenuItemList from "./components/pages/menu/MenuItemList";
import ItemInformation from "./components/pages/menu/MenuItemControl/Information/ItemInformation";
import { connect } from "react-redux";
import "./App.scss";
import { getMenu } from "./redux/actions/menuActions";

const App = ({ menu: { menu, loading, language }, getMenu }) => {
  useEffect(() => {
    getMenu();
  }, []);
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
              description:
                "A grass fed Angus beef burger with chipotle mayonnaise, pepper jack cheese, caramelized onions, chimichurri sauce, and fried sweet plantains.",
              pic:
                "https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg"
            },
            {
              id: 2,
              name: "Cheeseburger",
              price: "18.00",
              description:
                "A Kobe beef patty decked out with foie gras, port onion marmalade, and truffle mayo. If you post a pic of it, make sure you tag it #livingmybestlife.",
              pic:
                "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:burgers-2.jpg,f_auto,q_auto,w_500/v1/au/restaurants/11004952.jpg"
            },
            {
              id: 3,
              name: "Cheeseburger",
              price: "18.00",
              description:
                "A Kobe beef patty decked out with foie gras, port onion marmalade, and truffle mayo. If you post a pic of it, make sure you tag it #livingmybestlife.",
              pic:
                "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:burgers-2.jpg,f_auto,q_auto,w_500/v1/au/restaurants/11004952.jpg"
            },
            {
              id: 4,
              name: "Cheeseburger",
              price: "18.00",
              description:
                "A Kobe beef patty decked out with foie gras, port onion marmalade, and truffle mayo. If you post a pic of it, make sure you tag it #livingmybestlife.",
              pic:
                "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:burgers-2.jpg,f_auto,q_auto,w_500/v1/au/restaurants/11004952.jpg"
            },
            {
              id: 5,
              name: "Cheeseburger",
              price: "18.00",
              description:
                "A Kobe beef patty decked out with foie gras, port onion marmalade, and truffle mayo. If you post a pic of it, make sure you tag it #livingmybestlife.",
              pic:
                "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:burgers-2.jpg,f_auto,q_auto,w_500/v1/au/restaurants/11004952.jpg"
            },
            {
              id: 6,
              name: "Cheeseburger",
              price: "18.00",
              description:
                "A Kobe beef patty decked out with foie gras, port onion marmalade, and truffle mayo. If you post a pic of it, make sure you tag it #livingmybestlife.",
              pic:
                "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:burgers-2.jpg,f_auto,q_auto,w_500/v1/au/restaurants/11004952.jpg"
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
      comment: "Comment"
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
      backgroundColor: "#fff",
      slider: {
        label: {
          font: "default",
          fontSize: "3.5vh",
          color: "#000",
          fontWeight: "700"
        },
        fill: "#000"
      },
      button: {
        backgroundColor: "#000",
        fontWeight: "800"
      },
      comment: {
        label: {
          font: "default",
          fontSize: "3.5vh",
          color: "#000",
          fontWeight: "700"
        },
        box: {
          border: ""
        }
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
      name: "pt",
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
      name: "fr",
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
      name: "it",
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
      name: "zh",
      flag: (
        <svg
          width="92"
          height="54"
          viewBox="0 0 92 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="92" height="54" fill="#FF4B4D" />
          <path
            d="M13.0489 12.927C13.3483 12.0057 14.6517 12.0057 14.9511 12.9271L16.0206 16.2188C16.1545 16.6309 16.5385 16.9098 16.9717 16.9098H20.4329C21.4016 16.9098 21.8044 18.1494 21.0207 18.7188L18.2205 20.7533C17.87 21.0079 17.7234 21.4593 17.8572 21.8713L18.9268 25.1631C19.2261 26.0844 18.1717 26.8506 17.388 26.2812L14.5878 24.2467C14.2373 23.9921 13.7627 23.9921 13.4122 24.2467L10.612 26.2812C9.82833 26.8506 8.77385 26.0844 9.0732 25.1631L10.1428 21.8713C10.2766 21.4593 10.13 21.0079 9.7795 20.7533L6.97933 18.7188C6.19562 18.1494 6.59839 16.9098 7.56712 16.9098H11.0283C11.4615 16.9098 11.8455 16.6309 11.9794 16.2188L13.0489 12.927Z"
            fill="#FEC209"
          />
          <path
            d="M20.5245 5.46352C20.6741 5.00287 21.3259 5.00287 21.4755 5.46353L22.0103 7.10942C22.0773 7.31543 22.2692 7.45492 22.4858 7.45492H24.2164C24.7008 7.45492 24.9022 8.07472 24.5103 8.35942L23.1102 9.37664C22.935 9.50397 22.8617 9.72965 22.9286 9.93566L23.4634 11.5816C23.6131 12.0422 23.0858 12.4253 22.694 12.1406L21.2939 11.1234C21.1186 10.996 20.8814 10.996 20.7061 11.1234L19.306 12.1406C18.9142 12.4253 18.3869 12.0422 18.5366 11.5816L19.0714 9.93566C19.1383 9.72965 19.065 9.50397 18.8898 9.37664L17.4897 8.35942C17.0978 8.07472 17.2992 7.45492 17.7836 7.45492H19.5142C19.7308 7.45492 19.9227 7.31543 19.9897 7.10942L20.5245 5.46352Z"
            fill="#FEC209"
          />
          <path
            d="M28.5245 10.4635C28.6741 10.0029 29.3259 10.0029 29.4755 10.4635L30.0103 12.1094C30.0773 12.3154 30.2692 12.4549 30.4858 12.4549H32.2164C32.7008 12.4549 32.9022 13.0747 32.5103 13.3594L31.1102 14.3766C30.935 14.504 30.8617 14.7297 30.9286 14.9357L31.4634 16.5816C31.6131 17.0422 31.0858 17.4253 30.694 17.1406L29.2939 16.1234C29.1186 15.996 28.8814 15.996 28.7061 16.1234L27.306 17.1406C26.9142 17.4253 26.3869 17.0422 26.5366 16.5816L27.0714 14.9357C27.1383 14.7297 27.065 14.504 26.8898 14.3766L25.4897 13.3594C25.0978 13.0747 25.2992 12.4549 25.7836 12.4549H27.5142C27.7308 12.4549 27.9227 12.3154 27.9897 12.1094L28.5245 10.4635Z"
            fill="#FEC209"
          />
          <path
            d="M28.5245 20.4635C28.6741 20.0029 29.3259 20.0029 29.4755 20.4635L30.0103 22.1094C30.0773 22.3154 30.2692 22.4549 30.4858 22.4549H32.2164C32.7008 22.4549 32.9022 23.0747 32.5103 23.3594L31.1102 24.3766C30.935 24.504 30.8617 24.7297 30.9286 24.9357L31.4634 26.5816C31.6131 27.0422 31.0858 27.4253 30.694 27.1406L29.2939 26.1234C29.1186 25.996 28.8814 25.996 28.7061 26.1234L27.306 27.1406C26.9142 27.4253 26.3869 27.0422 26.5366 26.5816L27.0714 24.9357C27.1383 24.7297 27.065 24.504 26.8898 24.3766L25.4897 23.3594C25.0978 23.0747 25.2992 22.4549 25.7836 22.4549H27.5142C27.7308 22.4549 27.9227 22.3154 27.9897 22.1094L28.5245 20.4635Z"
            fill="#FEC209"
          />
          <path
            d="M20.5245 28.4635C20.6741 28.0029 21.3259 28.0029 21.4755 28.4635L22.0103 30.1094C22.0773 30.3154 22.2692 30.4549 22.4858 30.4549H24.2164C24.7008 30.4549 24.9022 31.0747 24.5103 31.3594L23.1102 32.3766C22.935 32.504 22.8617 32.7297 22.9286 32.9357L23.4634 34.5816C23.6131 35.0422 23.0858 35.4253 22.694 35.1406L21.2939 34.1234C21.1186 33.996 20.8814 33.996 20.7061 34.1234L19.306 35.1406C18.9142 35.4253 18.3869 35.0422 18.5366 34.5816L19.0714 32.9357C19.1383 32.7297 19.065 32.504 18.8898 32.3766L17.4897 31.3594C17.0978 31.0747 17.2992 30.4549 17.7836 30.4549H19.5142C19.7308 30.4549 19.9227 30.3154 19.9897 30.1094L20.5245 28.4635Z"
            fill="#FEC209"
          />
        </svg>
      )
    },
    {
      name: "en",
      flag: (
        <svg
          width="92"
          height="54"
          viewBox="0 0 92 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="92" height="54" fill="white" />
          <rect width="92" height="5" fill="#FF4B4D" />
          <rect width="92" height="6" fill="#FF4B4D" />
          <rect y="12" width="92" height="6" fill="#FF4B4D" />
          <rect y="24" width="92" height="6" fill="#FF4B4D" />
          <rect y="36" width="92" height="6" fill="#FF4B4D" />
          <rect y="48" width="92" height="6" fill="#FF4B4D" />
          <rect width="41" height="30" fill="#18407E" />
        </svg>
      )
    },
    {
      name: "ar",
      flag: (
        <svg
          width="92"
          height="54"
          viewBox="0 0 92 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="92" height="54" fill="white" />
          <rect width="92" height="18" fill="#D33131" />
          <rect y="36" width="92" height="18" fill="#262626" />
          <path d="M46.4521 27L49.4521 32H43.4521L46.4521 27Z" fill="#FFC200" />
          <path
            d="M51.0379 25.2256L52.7001 31.3921L46.5286 29.7484L51.0379 25.2256Z"
            fill="#FFC200"
          />
          <path
            d="M41.5217 25.2256L39.8595 31.3921L46.031 29.7484L41.5217 25.2256Z"
            fill="#FFC200"
          />
          <path
            d="M50.2987 23.8328C50.9303 23.3468 51.8489 23.7588 51.906 24.5538L52.2806 29.7719C52.3347 30.5264 51.564 31.0655 50.8739 30.7559L46.3533 28.7284C45.6632 28.4188 45.5532 27.4847 46.1527 27.0235L50.2987 23.8328Z"
            fill="#FFC200"
          />
          <path
            d="M42.2609 23.8328C41.6293 23.3468 40.7106 23.7588 40.6536 24.5538L40.279 29.7719C40.2249 30.5264 40.9955 31.0655 41.6857 30.7559L46.2063 28.7284C46.8964 28.4188 47.0063 27.4847 46.4069 27.0235L42.2609 23.8328Z"
            fill="#FFC200"
          />
          <path
            d="M45.4683 23.4113C45.6673 22.3165 47.237 22.3165 47.436 23.4113L48.2378 27.8211C48.3494 28.435 47.8778 29 47.2539 29H45.6504C45.0265 29 44.5549 28.435 44.6665 27.8211L45.4683 23.4113Z"
            fill="#FFC200"
          />
          <path
            d="M44.3751 23.1607C44.1223 23.0617 44.1865 22.6873 44.4578 22.6781L46.5468 22.6071C46.7051 22.6017 46.8284 22.743 46.8017 22.8991L46.6588 23.7326C46.6321 23.8887 46.4687 23.981 46.3212 23.9232L44.3751 23.1607Z"
            fill="#FFC200"
          />
        </svg>
      )
    }
  ];
  const handleAvailableLanguages = languages => {
    let availableLanguages = [];
    for (const requestedLang of menu.data.translatedMenus) {
      for (const language of languages) {
        if (requestedLang.language === language.name) {
          availableLanguages.push(language);
        }
      }
    }
    return availableLanguages;
  };
  const handleTranslate = lang => {
    if (lang === "default") {
      return menu.data.translatedMenus[0].catagory;
    } else {
      for (const index in menu.data.translatedMenus) {
        if (lang === menu.data.translatedMenus[index].language) {
          return menu.data.translatedMenus[index].catagory;
        }
      }
    }
  };
  if (loading || menu === null) {
    return <div>Loading</div>;
  }

  return (
    <div className="overflow">
      <Router>
        <div className="fixed-top">
          <Header
            style={clientStyle.header}
            language={handleAvailableLanguages(languages)}
          />
        </div>
        <Route
          path="/"
          exact
          component={() => (
            <Menu
              catagories={handleTranslate(language)}
              style={clientStyle.menu}
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
          path="/rate"
          component={() => (
            <Rate style={clientStyle.rate} data={clientData.rate} />
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
  );
};

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps, { getMenu })(App);
