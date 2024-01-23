import { createSlice } from "@reduxjs/toolkit"
import messageUtils from "../utils/messageActions"

const initialState = {
    show: false,
    label: '',
    variant: 'success'
}

export const slice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        ...messageUtils
    }
})

export const selectMessage = {
    state: state => state.message
}

export const messageActions = slice.actions

const messageReducer = slice.reducer

export default messageReducer
