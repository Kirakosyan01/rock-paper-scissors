import { ENTER_HAND_CHOICE } from "./type";

const initialState = {
    currentChoice: "",
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
            case ENTER_HAND_CHOICE:
                return {
                    ...state,
                    currentChoice: action.payload,
                }
        default:
            return state;
    }
}