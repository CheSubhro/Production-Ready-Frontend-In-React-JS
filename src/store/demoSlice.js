import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import demoService from '../services/demoService'; // Change Acoordingly

// ১. Async Thunk: API কল করার জন্য
export const fetchData = createAsyncThunk(
    'sliceName/fetchData',
    async (params, thunkAPI) => {
        try {
            const response = await api.get('/endpoint', { params });
            return response.data; // ডাটা রিটার্ন করুন
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || 'Error occurred');
        }
    }
);

// ২. Slice তৈরি: স্টেট এবং রিডুসার ম্যানেজমেন্ট
const dataSlice = createSlice({
    name: 'sliceName',
    initialState: {
        items: [],       // ডাটা রাখার জন্য
        isLoading: false, // লোডিং স্টেট
        isError: false,   // এরর ফ্ল্যাগ
        message: '',      // এরর মেসেজ
    },
    reducers: {
        // যদি সাধারণ কোনো লোকাল আপডেট দরকার হয়
        resetState: (state) => {
            state.items = [];
            state.isError = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload; // ডাটা সেট করা
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload; // এরর মেসেজ সেট করা
            });
    },
});

export const { resetState } = dataSlice.actions;
export default dataSlice.reducer;
