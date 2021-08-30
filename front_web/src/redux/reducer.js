import { ADD, SUB } from './actions'

const defaultValue = {
    num: 1
}


const reducer = (state = defaultValue, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ADD:
            newState.num = newState.num + 1
            return newState
        case SUB:
            newState.num = newState.num - 1
            return newState
        default:
            return state;

    }
}
export default reducer

