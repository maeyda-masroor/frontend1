import { configureStore} from "@reduxjs/toolkit";
import UserSlice from "./components/UserSlice";

export const store = configureStore({
  reducer:{
    user:UserSlice,
  } ,
});