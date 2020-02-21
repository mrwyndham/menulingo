import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ style, menu: { language } }) => {
  return (
    <nav style={{ backgroundColor: `${style.navbar.backgroundColor}` }}>
      <ul>
        <Link to={{ pathname: "/", data: style }}>
          <li>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.68996 17.4265L13.2781 12.5946L1.89688 0.626016C-0.632292 3.2895 -0.632292 7.60913 1.89688 10.2897L8.68996 17.4265V17.4265ZM19.6821 14.3361C22.1626 15.5484 25.6483 14.6947 28.2261 11.98C31.3228 8.71891 31.9226 4.04074 29.5394 1.53092C27.1723 -0.961831 22.7301 -0.347181 19.6173 2.91388C17.0395 5.62859 16.2288 9.29942 17.3799 11.9117L1.55641 28.5755L3.84239 30.9829L15.0129 19.2533L26.1671 31L28.4531 28.5926L17.2989 16.846L19.6821 14.3361V14.3361Z"
                fill={`${style.navbar.color}`}
              />
            </svg>
          </li>
        </Link>
        <Link to={`/${language}/rate`}>
          <li>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.3333 0H3.66665C1.83331 0 0.34998 1.5 0.34998 3.33333L0.333313 33.3333L6.99998 26.6667H30.3333C32.1667 26.6667 33.6667 25.1667 33.6667 23.3333V3.33333C33.6667 1.5 32.1667 0 30.3333 0ZM6.99998 20V15.8833L18.4666 4.41667C18.8 4.08333 19.3167 4.08333 19.65 4.41667L22.6 7.36667C22.9333 7.7 22.9333 8.21667 22.6 8.55L11.1166 20H6.99998ZM27 20H14.5L17.8333 16.6667H27V20Z"
                fill={`${style.navbar.color}`}
              />
            </svg>
          </li>
        </Link>
        <Link to={`/${language}/about`}>
          <li>
            <svg
              width="35"
              height="31"
              viewBox="0 0 35 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.0556 0H1.94444V3.875H33.0556V0ZM35 19.375V15.5L33.0556 5.8125H1.94444L0 15.5V19.375H1.94444V31H21.3889V19.375H29.1667V31H33.0556V19.375H35ZM17.5 27.125H5.83333V19.375H17.5V27.125Z"
                fill={`${style.navbar.color}`}
              />
            </svg>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps)(Navbar);
