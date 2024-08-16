export const apiPayPal = async (data) => {
    const response = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders" , {
        method: "POST",
        headers: {
            "Content-Type" : "application/json" ,
        } ,
        body: JSON.stringify(data)
    }) ;
    
    const order = response.json() ;
    return order.id ;
}

export const apiOnApprovePayPal = async (orderId) => {
    const response = await fetch("https://sandbox.paypal.com" , {
        method: "POST",
        headers: {
            "Content-Type" : "application/json" ,
        } ,
        body: JSON.stringify({"orderId" : orderId})
    }) ;
    
    const details = response.json() ;
    return details ;
}

// AU_ErnLGuDnfP4htdhKkhil6Z5A28wSWdcyeZK-NxQiTQ9iqHCmKaBUe005asqi7AXFjWe2YBYEeufgT

// EAJIfEGPEdNwM3vbTwwzbvipnKVv59MVEmBCwha9BxokHk3RyHMFEaSzXg_G6hMF4L_3LvwEzxKSslBO