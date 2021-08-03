import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey ="pk_test_51JKRpXSFRmascdtbDmHIpaOMh7fKVJ114ekVKthocJVaZV2No2PGEpeHlcdOd4HWbRPhYfAQfTot3GtgBRKOxtjY00sK7VEBgX";

    const onToken =(token) => {
        console.log(token);
        alert("Payment Succesful");
    }

    return (
        <StripeCheckout
        label="Pay Now 💳"
        name="CSK Clothing Ltd."
        billingAddress
        shippingAddress
        image={"https://logosvector.net/wp-content/uploads/2014/01/chennai-super-kings-vector-logo.png"}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )    
}

export default StripeCheckoutButton;