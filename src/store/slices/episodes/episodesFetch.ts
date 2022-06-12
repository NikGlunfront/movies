import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IEpisode } from "../../../models/IEpisode";

const fetchUrl = axios.create({
    baseURL: 'https://breakingbadapi.com'
})


export const fetchEpisodes = createAsyncThunk(
    'episodes/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await fetchUrl.get<IEpisode[]>(`/api/episodes?series=Breaking+Bad`)
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue('Не удалось загрузить пользователей')
        }
    }
)