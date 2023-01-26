import { createContext } from "react";

export const AuthContextProps = createContext({
    isLoggedIn: false,
    user: {
        pumper_id : 0,
        nickname : "",
        fullname: "",
        age : 0,
        email: "",
        start_date: "",
        type_category : "",
        elo : 0,
        password : "",
    }
  })