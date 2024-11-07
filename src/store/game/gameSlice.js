import { ENTER_GAME_COUNT } from "./type";

const initialState = {
    userWinsCount: 0,
    botWinsCount: 0,
    AllGamesCount: 0,
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTER_GAME_COUNT:
            return {
                ...state,
                AllGamesCount: state.AllGamesCount + 1,
                userWinsCount: state.userWinsCount + action.payload.userWin,
                botWinsCount: state.botWinsCount + action.payload.botWin,
            }
        default: 
        return state;
    }
}