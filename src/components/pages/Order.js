import React from "react";
import OrderItemList from "./order/OrderItemList";
import "./Order.scss";

const Order = props => {
  const noOrders = (
    <div className="Order--Empty">
      <div className="Order--Empty--Icon">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.38177 3.51288C5.14399 3.78682 5 4.14981 5 4.55V32.45C5 33.1389 5.66667 34 6.5 34H33.5C33.9984 34 34.59 33.5187 34.8568 32.9879L31.6667 29.7978V30.5556H8.33333V6.46444L5.38177 3.51288ZM19.4644 13.3333L18.3333 12.2023V9.88889H28.3333V13.3333H19.4644ZM11.7578 9.88889L15 13.1311V13.3333H11.6667V9.88889H11.7578ZM18.6467 16.7778L22.0911 20.2222H18.3333V16.7778H18.6467ZM26.3533 20.2222L22.9088 16.7778H28.3333V20.2222H26.3533ZM31.6667 25.5356V6.44444H12.5755L9.13104 3H33.5C34.1667 3 35 3.68889 35 4.55V28.869L31.6667 25.5356ZM25.5356 23.6667H18.3333V27.1111H28.3333V26.4644L25.5356 23.6667ZM15 16.7778H11.6667V20.2222H15V16.7778ZM15 23.6667H11.6667V27.1111H15V23.6667Z"
            fill="#AFAFAF"
          />
          <rect
            x="2.52087"
            y="4.17908"
            width="2.93759"
            height="45.6789"
            transform="rotate(-45 2.52087 4.17908)"
            fill="#AFAFAF"
          />
        </svg>
      </div>
      <h1 className="Order--Empty--Text">Place your order :)</h1>
    </div>
  );
  const {
    orders,
    currency,
    orderUpdate,
    selectOrderItem,
    selectOrderItemState
  } = props;
  return (
    <div className="Order">
      {orders.length === 0 ? (
        noOrders
      ) : (
        <OrderItemList
          orders={orders}
          currency={currency}
          orderUpdate={orderUpdate}
          selectOrderItem={selectOrderItem}
          selectOrderItemState={selectOrderItemState}
        />
      )}
    </div>
  );
};

export default Order;
