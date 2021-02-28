import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51IMIyLAVI7YMiFvEzuSzpzIpqCEe8VX93X49Nk8AnmVaHeSoePJQqcJBWXBeph0spqOUoVg1vf1sUwIZv04MPMP900L5XVcGC8";

  const onToken = (token) => {
    axios({
      url: "http://localhost:5000/payment",
      method: "post",
      data: {
        amount: stripePrice,
        token: token,
      },
    })
      .then((response) => {
        alert("Payment successful");
        console.log(response);
      })
      .catch((error) => {
        console.log("Payment Error: " + error);
        alert(
          "There was an issue with your payment. Please use provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Buy Now"
      name="Foreman Ecomm"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Buy Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
