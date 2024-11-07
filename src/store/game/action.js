import { ENTER_GAME_COUNT } from "./type";

export const actionEnterGameCount = (payload) => ({
    type: ENTER_GAME_COUNT,
    payload,
});

export const selectGame = (state) => state.game