const messageUtils = {
    successMessage: (state, { payload }) => {
        return {
            ...state,
            ...payload,
            variant: 'success',
            show: true
        }
    },
    errorMessage: (state, { payload }) => {
        return {
            ...state,
            ...payload,
            variant: 'error',
            show: true
        }
    },
    // alertMessage: (state, { payload }) => {
    //     return {
    //         ...state,
    //         ...payload,
    //         show: true
    //     }
    // },
    // successMessage: (state, { payload }) => {
    //     return {
    //         ...state,
    //         ...payload,
    //         show: true
    //     }
    // },
    hideMessage: (state, { payload }) => {
        return {
            ...state,
            ...payload,
            show: false
        }
    }
}

export default messageUtils
