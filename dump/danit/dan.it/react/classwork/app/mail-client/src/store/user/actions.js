import { SET_CURRENT_USER } from "./types";

export const saveUserAction = (newUser) => ({type: SET_CURRENT_USER, payload: newUser})