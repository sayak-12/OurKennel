import { createContext, useReducer } from 'react';

export const authContext = createContext();

export const authReducer = (state, action)=>{
    switch (action.type) {
        case "LOGIN":
            return {user: action.payload}
        case "LOGOUT":
            return {user:null}
        default:
            return state;
    }
}
export const AuthContextProvider = ({children})=>{
    var [state, dispatch] = useReducer(authReducer, {
        user:null
    });

    console.log("AuthContext state", state);
    return (
        <authContext.Provider value={{...state, dispatch}}>
            {children}
        </authContext.Provider>
    )
}