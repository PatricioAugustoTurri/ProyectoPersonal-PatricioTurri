import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

function PayPal ({props}){
    
    const  initialOptions  =  { 
        clientId : "Afs048jx1HdUKadieZ3OoQI0YP9L7SJk9yZKyDa-s2pgB6FaUzX-KTlZxVwsbXQoyWqtBJvnzQ6zVHde" , 
        moneda : "EUR" ,
    }

    return ( 
        <PayPalScriptProvider opciones = { initialOptions } > 
            <PayPalButtons
                createOrder = {(data , actions)=>{
                    return actions.order.create({
                        purchase_units: [{
                            description : props.titulo , 
                            amount : {
                                value : props.precio
                            }
                        }]
                    })
                }}
                onApprove={async(data, actions) => {
                    const order = await actions.order.capture()
                    console.log("order" , order) 
                }
            }
            />
        </PayPalScriptProvider > 
    ) 
}

export default PayPal ;

