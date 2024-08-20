
function PayPalButton (){

    function renderPayPalButton() {
        paypal
        .Buttons ({
            createOrder: async () => {
                axios({
                    url:"" ,
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        
                    }  
                })
            }
        })
        .render("#paypal-button-container");
    }
    return (
        <div>
            <div id ="paypal-button-container"></div>
        </div>
    )
}

export default PayPalButton ;