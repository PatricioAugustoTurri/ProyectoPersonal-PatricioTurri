import { loadScript } from "@paypal/paypal-js";
import { useEffect } from "react";



function PayPalButton(){
    let paypal ;

    const iniciarPaypal = async () => {
        try {
            paypal = await loadScript({ clientId: "test" });
        } catch (error) {
            console.error("failed to load the PayPal JS SDK script", error);
        }
        
        if (paypal) {
            try {
                await paypal.Buttons().render("#btns-paypal");
            } catch (error) {
                console.error("failed to render the PayPal Buttons", error);
            }
        }
    }

    useEffect (()=>{
         iniciarPaypal()
    } , [])

    return (
        <div id="btns-paypal">

        </div>
    )
}

export default PayPalButton;