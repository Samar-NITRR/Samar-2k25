import React, { useEffect } from 'react';

const RazorpayButton = () => {
    useEffect(() => {
        if (!document.querySelector(`script[src="https://checkout.razorpay.com/v1/payment-button.js"]`)) {
            const script = document.createElement('script');
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.setAttribute('data-payment_button_id', 'pl_Pixrc26VTokfhP');
            script.async = true;

            const form = document.getElementById('razorpay-form');
            form.appendChild(script);
        }
    }, []);

    return (
        <div id="razorpay-button-container">
            <form id="razorpay-form"></form>
        </div>
    );
};


const RazorpayButton3 = () => {
    useEffect(() => {
        if (!document.querySelector(`script[src="https://checkout.razorpay.com/v1/payment-button.js"]`)) {
            const script = document.createElement('script');
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.setAttribute('data-payment_button_id', 'pl_PiwuXkS4MRSITb');
            script.async = true;

            const form = document.getElementById('razorpay-form');
            form.appendChild(script);
        }
    }, []);

    return (
        <div id="razorpay-button-container">
            <form id="razorpay-form"></form>
        </div>
    );
};
const RazorpayButton4 = () => {
    useEffect(() => {
        if (!document.querySelector(`script[src="https://checkout.razorpay.com/v1/payment-button.js"]`)) {
            const script = document.createElement('script');
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.setAttribute('data-payment_button_id', 'pl_PixuFvG4HftIGw');
            script.async = true;

            const form = document.getElementById('razorpay-form');
            form.appendChild(script);
        }
    }, []);

    return (
        <div id="razorpay-button-container">
            <form id="razorpay-form"></form>
        </div>
    );
};


export  {RazorpayButton,RazorpayButton3,RazorpayButton4};

