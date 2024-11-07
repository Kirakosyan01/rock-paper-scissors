import { ENTER_BOT_CHOICE } from "./type";

export const actionEnterBotChoice = (payload) => ({
    type: ENTER_BOT_CHOICE,
    payload,
});

export const selectBot = (state) => state.bot;