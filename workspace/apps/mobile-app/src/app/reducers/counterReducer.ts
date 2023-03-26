import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appNavigate, ReducerStateStatus} from "../navigation";

export interface CounterState {
  status: ReducerStateStatus,
  value: number,
};

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export interface CounterAction {
  inc: number
}


export const incrementAsync =  createAsyncThunk<CounterAction>(
  'counter/incrementAsync',
  async () => {
    // to async call
    const r = await fetch(`https://dummyjson.com/products/1`);
    const json = await r.json();
    const action: CounterAction = {
      inc: json.rating,
    };
    console.log(json, action);
    return action;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
      increment: (state: CounterState, action:PayloadAction<CounterAction>) => {
        console.log('***8 x2');
        return {
          ...state,
          value: state.value + action.payload.inc,
        }
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state: CounterState, action : PayloadAction<undefined>) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<CounterAction>) => {
        console.log('***8 x1');
        state.status = 'succeeded';
        state.value = state.value + action.payload.inc;
        // navigate('Screen1', {});
      })
      .addCase(incrementAsync.rejected, (state, action: PayloadAction<unknown>) => {
        state.status = 'failed';
      })
  }
});


// export const selectCounter = (state: RootState) => state.counter;

export const {increment} =  counterSlice.actions;
export default counterSlice.reducer;
