import { SET_EMAILS, SET_EMAILS_LOADING, TOGGLE_FAVORITES } from "./types"

export const saveEmailsAction = (emails) => ({type: SET_EMAILS, payload: emails})

export const emailsLoadingAction = (isLoading) => ({type: SET_EMAILS_LOADING, payload: isLoading})

export const toggleFavoritesAction = (email) => ({type: TOGGLE_FAVORITES, payload: email})