import React from 'react';

function OrderConfirmationScreen(props) {

    const OrderConfirmHandler = () => {
        props.history.push('/');
    }

    return (
        <div className='confirm'>
            <h1>Order Confirmed</h1>
            <i className="fa fa-check-circle-o fa-cog fa-10x" aria-hidden="true"></i>
            <button className="button primary full-width" onClick={OrderConfirmHandler}>Go back to Shopstar</button>
        </div>
    )
}

export default OrderConfirmationScreen;
