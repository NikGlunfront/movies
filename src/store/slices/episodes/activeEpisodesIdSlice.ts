import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface activeEpisodesState {
    activeEpisodes: number[]
    isFirstLoadingActiveEpisodes: boolean
}

const initialState: activeEpisodesState = {
    activeEpisodes: [],
    isFirstLoadingActiveEpisodes: true
}
export const activeEpisodesSlice = createSlice({
    name: "activeEpisodes",
    initialState,
    reducers: {
        updateActiveEpisodes(state, action: PayloadAction<string[]>) {
            let newArray: number[] = []
            action.payload.forEach(id => {
                newArray.push(parseInt(id))
            })

            state.activeEpisodes = newArray
        },
        setActiveEpisode(state, action: PayloadAction<number>) {
            state.activeEpisodes = [...state.activeEpisodes, action.payload]
            state.isFirstLoadingActiveEpisodes = false
        },
        deleteActiveEpisode(state, action: PayloadAction<number>) {
            state.activeEpisodes = state.activeEpisodes.filter(id => id !== action.payload)
            state.isFirstLoadingActiveEpisodes = false
        }
    }
})

export const {
    deleteActiveEpisode, 
    setActiveEpisode,
    updateActiveEpisodes
} = activeEpisodesSlice.actions
export default activeEpisodesSlice.reducer; 