import { EnthusiasmAction } from 'src/actions'
import { StoreState } from 'src/types'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from 'src/constants'

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 }
    }

    return state
}