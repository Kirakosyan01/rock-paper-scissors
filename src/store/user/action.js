import { ENTER_HAND_CHOICE } from "./type";

export const actionEnterHandChoice = (payload) => ({
    type: ENTER_HAND_CHOICE,
    payload,
});

export const selectUser = (state) => state.user;