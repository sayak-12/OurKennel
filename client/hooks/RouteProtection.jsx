/* eslint-disable react/prop-types */
import {useAuthContext} from "./useAuthContext.js";
import {Navigate} from "react-router-dom"

export const RouteProtection = ({route, children}) => {
    const {user}= useAuthContext();
    switch (route) {
        case "dashboard":
            if (!user) {
                return < Navigate to="/login"/>
            }
          return children;
        case "login":
            if(user){
                return < Navigate to="/dashboard"/>
            }
            return children;
        default:
            return children;
    }
    
}
