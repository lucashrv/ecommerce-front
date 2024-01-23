const messageUtils = {
    showMessage: (state, { payload }) => {
        return {
            ...state,
            ...payload,
            show: true
        }
    },
    hideMessage: (state, { payload }) => {
        return {
            ...state,
            ...payload,
            show: false
        }
    }
}

export default messageUtils
