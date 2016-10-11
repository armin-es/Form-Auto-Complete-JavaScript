function billingFunction(){
    /**
    * @description If checkmark is marked, then put the shiping address as same as billing infomation
    * @param {number} N/A
    * @param {number} N/A
    * @returns {number} N/A
    */

    if( document.getElementById( 'same' ).checked ) {
        var shipName = document.getElementById( 'shippingName' ).value;
        document.getElementById( 'billingName' ).value = shipName;

        var shipZip = document.getElementById( 'shippingZip' ).value;
        document.getElementById( 'billingZip' ).value = shipZip;
    }
    else {
        document.getElementById( 'billingName' ).value = "";
        document.getElementById( 'billingZip' ).value = "";
    }
}