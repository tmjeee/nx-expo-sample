import {AppDipatch, AppRootState} from "./store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const useAppDispatch: () => AppDipatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
