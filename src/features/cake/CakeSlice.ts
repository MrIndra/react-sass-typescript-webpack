import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {InitialState} from './cakeType'

const initialState: InitialState = {
  numOfCakes: 20
}

const CakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfCakes--
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload
    }
  }
})

export default CakeSlice.reducer
export const { ordered, restocked } = CakeSlice.actions
