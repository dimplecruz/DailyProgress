import { configureStore } from '@reduxjs/toolkit'
import storeSlice from './Screens/reducer/storeSlice'


export default configureStore({
  reducer: {
    store: storeSlice
  },
})