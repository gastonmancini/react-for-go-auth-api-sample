import { User } from "../../models/user"

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        user
    }
}