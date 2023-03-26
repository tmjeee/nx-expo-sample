import {ReducerStateStatus} from "../navigation";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

// normally from share lib (Product domain object)
export interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  rating: number,
}

export interface ProductsState {
  status: ReducerStateStatus,
  products: Product[]
};

const initialState: ProductsState = {
  status: 'idle',
  products: []
};

export interface ProductsAction {
  // todo:
  products: Product[],
}

export interface ProductsActionArgs {
  option: string,
}

export const listProductsAsync = createAsyncThunk<ProductsAction, ProductsActionArgs>(
  'products/listProductAsync',
  async (param) => {
    console.log('***** listProductAsync', param);
    const r = await fetch(`https://dummyjson.com/products`);
    const json = await r.json();
    // do async call
    const action: ProductsAction =  {
      products: json.products ?? []
    }
    return action;
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // add extra reducers
    builder
      .addCase(listProductsAsync.pending, (state: ProductsState, action: PayloadAction<undefined>) => {
        state.status = 'loading';
      })
      .addCase(listProductsAsync.fulfilled, (state: ProductsState, action: PayloadAction<ProductsAction>) => {
        state.status = 'succeeded';
        state.products = action.payload.products;
      })
      .addCase(listProductsAsync.rejected, (state: ProductsState, action: PayloadAction<unknown>) => {
        state.status = 'failed';
      })
  }
});

// export const {} = productsSlice.actions;

export default productsSlice.reducer;

