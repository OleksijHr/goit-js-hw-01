'use strict';

function getElementWidth(content, padding, border) {
    return Number.parseFloat(content) + Number.parseFloat(padding) + Number.parseFloat(border);
}

console.log(getElementWidth("50px", "8px", "4px"));