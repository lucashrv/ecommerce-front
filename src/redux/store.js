import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import messageReducer from './slices/messageSlice'

const store = configureStore({
    reducer: {
        users: userReducer,
        message: messageReducer,
    },
})
// middleware: () => {
//     return []
// }

export default store
