import { createContext } from "react";

export const miContexto2 = createContext()
const Provider = miContexto2.Provider ;

function UserProvider (props){
    
    return (
        <Provider value={{}}>
            {props.children}
        </Provider>
    )
}

export default UserProvider ;