import { loadScript } from "@paypal/paypal-js";
import { useEffect } from "react";
import { apiPayPal , apiOnApprovePayPal } from "../ApisPayPal/apiPayPal.js";


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
                await paypal.Buttons({
                    async createOrdedr () {
                        const idOrder = apiPayPal ()
                        return idOrder
                    },
                    async onApprove (data) {
                        const details = await apiOnApprovePayPal(data.orderID)
                        console.log(details)
                    }
                }).render("#btns-paypal");
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