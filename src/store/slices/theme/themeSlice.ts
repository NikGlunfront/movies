import { createSlice } from "@reduxjs/toolkit";
import episodesSlice from "../episodes/episodesSlice";

export enum Themes {
    DARK = "DARK",
    LIGHT = "LIGHT"
}

interface ThemeState {
    theme: Themes,
}

const initialState: ThemeState = {
    theme: Themes.DARK
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state) {
            if (state.theme === Themes.DARK) {
                state.theme = Themes.LIGHT
            } else {
                state.theme = Themes.DARK
            }
        }
    }
})

export const {changeTheme} = themeSlice.actions

export default themeSlice.reducer;