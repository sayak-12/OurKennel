import { useContext } from "react";
import { authContext } from "./authContext";

export const useAuthContext =()=>{
    const context = useContext(authContext);
    if (!context) {
        throw Error("useAuthContext must be used inside an AuthContextProvider")
    }
    return context;
}