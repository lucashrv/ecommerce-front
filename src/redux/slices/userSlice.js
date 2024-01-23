import { createSlice } from "@reduxjs/toolkit"
import actions from "../utils/defaultActions"

const initialState = {
    list: [],
    entity: {},
    loading: false,
    error: null
}

export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        ...actions
    }
})

export const selectUser = {
    state: state => state.user,
    list: state => state.user.list,
    entity: state => state.user.entity
}

export const userActions = slice.actions

const userReducer = slice.reducer

export default userReducer
