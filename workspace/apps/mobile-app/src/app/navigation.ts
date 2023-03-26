import {createNavigationContainerRef} from "@react-navigation/native";

export type ReducerStateStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type AppScreenStackParamList = {
  Screen1: undefined,
  Screen2: undefined,
}

export const navigationRef = createNavigationContainerRef<AppScreenStackParamList>();

// todo: not sure how to type these
// NOTE: only use when within redux construct, else useNavigation<ScreenProp>();
export const appNavigate = (name: any, params: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}


