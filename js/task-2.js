'use strict';

function getShippingMassage(country, price, deliveryFee) {
    let totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMassage("Ukraine", 2, 5));