import { User } from "../../models/user";

export const setUserReducer = (state = { user: new User() }, action) => {
    switch (action.type) {
        case "SET_USER":
            // Do not modify the state. State must be inmutable. Each time we have to return a new one.
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}