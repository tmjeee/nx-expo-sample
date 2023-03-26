import {createNavigationContainerRef} from "@react-navigation/native";

export type ReducerStateStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type AppScreenStackParamList = {
  Screen1: undefined,
  Screen2: undefined,
}

export const navigationRef = createNavigationContainerRef<AppScreenStackParamList>();

// todo: not sure how to type these
export const appNavigate = (name: any, params: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}


