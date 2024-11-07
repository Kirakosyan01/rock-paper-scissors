import { ENTER_BOT_CHOICE } from "./type";

const initialState = {
    currentChoice: "",
}

export const botReducer = (state = initialState, action) => {
    switch (action.type){
        case ENTER_BOT_CHOICE:
            return {
                ...state,
                currentChoice: action.payload
            }
        default:
            return state;
    }
}