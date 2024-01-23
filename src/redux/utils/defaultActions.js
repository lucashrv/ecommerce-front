const actions = {
    updateState: (state, { payload }) => {
        return { ...state, ...payload }
    },
    updateEntity: (state, { payload }) => {
        return { ...state, entity: { ...payload } }
    },
    clearEntity: (state) => {
        return { ...state, entity: {} }
    }
}

export default actions
