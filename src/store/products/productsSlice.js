import { createSlice } from "@reduxjs/toolkit"
import actions from '../utils/defaultActions'

const initialState = {
    entity: {},
    entityErrors: {},
}

export const slice = createSlice({
    name: 'productsEntity',
    initialState,
    reducers: {
        ...actions
    }
})

export const selectProducts = { state: state => state.productsEntity }

export const productsActions = slice.actions

const productsReducer = slice.reducer

export default productsReducer


// import { createSlice } from "@reduxjs/toolkit"
// import actions from "../utils/defaultActions"

// const initialState = {
//     list: [],
//     entity: {},
//     entityErrors: null,
//     loading: false,
//     errors: null
// }

// export const slice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {
//         ...actions
//     }
// })

// export const selectUser = {
//     state: state => state.users,
//     list: state => state.users.list,
//     entity: state => state.users.entity,
//     entityErrors: state => state.users.entityErrors,
//     loading: state => state.users.loading,
//     errors: state => state.users.errors
// }

// export const userActions = slice.actions

// const userReducer = slice.reducer

// export default userReducer
