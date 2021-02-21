import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
 const stripePrice = price * 100
 const publishableKey = "pk_test_51IMIyLAVI7YMiFvEzuSzpzIpqCEe8VX93X49Nk8AnmVaHeSoePJQqcJBWXBeph0spqOUoVg1vf1sUwIZv04MPMP900L5XVcGC8"

const onToken = token => {
    console.log(token)
     alert("Payment Complete")
}

 return (
     <StripeCheckout 
     label="Pay Now"
     name="Foreman Ecomm"
     billingAddress
     shippingAddress
     description={`Your total is $${price}`}
     amount={stripePrice}
     panelLabel="Pay Now"
     token={onToken}
     stripeKey={publishableKey} />
 )
}

export default StripeButton