import { combineReducers, createStore } from "redux";
import { userReducer } from "./user/userSlice";
import { botReducer } from "./bot/botSlice";
import { gameReducer } from "./game/gameSlice";

export const store = createStore(
    combineReducers({
        user: userReducer,
        bot:botReducer,
        game: gameReducer,
    }))