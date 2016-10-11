function billingFunction(){
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