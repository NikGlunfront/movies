import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEpisode } from "../../../models/IEpisode";
import { fetchEpisodes } from './episodesFetch';

interface EpisodesState {
    episodes: IEpisode[],
    isLoading: boolean,
    error: string
}

const initialState: EpisodesState = {
    episodes: [],
    isLoading: false,
    error: ''
}

export const episodesSlice = createSlice({
    name: 'episodes',
    initialState,
    reducers: {

    },

    extraReducers: {
        [fetchEpisodes.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchEpisodes.fulfilled.type]: (state, action: PayloadAction<IEpisode[]>) => {
            state.isLoading = false
            state.episodes = action.payload
            state.error = ''
        },
        [fetchEpisodes.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default episodesSlice.reducer;