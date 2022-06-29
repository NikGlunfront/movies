import { combineReducers, configureStore } from "@reduxjs/toolkit";
import episodes from './slices/episodes/episodesSlice';
import theme from './slices/theme/themeSlice';
import activeEpisodes from './slices/episodes/activeEpisodesIdSlice';

const rootReducer = combineReducers({
    episodes,
    theme,
    activeEpisodes
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleWare) => 
            getDefaultMiddleWare().concat()
    }) 
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']