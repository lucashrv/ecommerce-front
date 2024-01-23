import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import messageReducer from './slices/messageSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        message: messageReducer,
    },
})
// middleware: () => {
//     return []
// }

export default store
