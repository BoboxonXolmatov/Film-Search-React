// import { createContext, useEffect, useReducer } from "react";
// import { auth } from "../firebase/FireBaseConfig";
// import { onAuthStateChanged } from "firebase/auth";


// export const GlobalContext = createContext();

// const changeState = (state, action) => {
//     switch (action.type) {
//         case "LOGIN":
//             return { ...state, user: action.payload };
//         case "LOGOUT":
//             return { ...state, user: null };
//         case "AUTH_CHANGE":
//             return { ...state, onAuthChange: true };
//     }
// };


// // 
// export function GlobalContextProvider({ children }) {
//     const [state, dispatch] = useReducer(changeState, {
//         user: null,
//         onAuthChange: false,
//     });

//     useEffect(() => {
//         onAuthChanged(auth, (user) => {
//             dispatch({type: "LOGIN", payload: user})
//             dispatch({ type: 'AUTH_CHANGE', payload: true })
//         })
//     }, [])


//     return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
// }
