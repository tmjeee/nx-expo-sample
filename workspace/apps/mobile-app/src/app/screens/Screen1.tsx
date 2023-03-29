import {Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text} from "react-native";
import React, {useRef} from "react";
import {CounterAction, increment, incrementAsync} from "../reducers/counterReducer";
import {useAppDispatch, useAppSelector} from "../hooks";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {appNavigate, AppScreenStackParamList} from "../navigation";
import {useNavigation} from "@react-navigation/native";

export type Screen1Prop = NativeStackScreenProps<AppScreenStackParamList, 'Screen1'>;

const Screen1 = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  const dispatch = useAppDispatch();
  const nav = useNavigation<Screen1Prop>();

  const counterState = useAppSelector((state) => state.counter);

  const onButtonPress = async () => {
    // dispatch(increment({ inc: 2 }));
    const action = await dispatch<CounterAction | undefined | unknown>(incrementAsync());
    console.log('*** dispatch incrementAsync result', (action as any).type, (action as any).payload);
    if (counterState.status == 'succeeded') {
      appNavigate('Screen2', {});
      // nav.navigation.navigate('Screen2');
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Text>{'SCREEN 1'}</Text>
          <Text>{counterState.status}</Text>
          <Text>{counterState.value}</Text>
          <Button title="Press" onPress={onButtonPress}/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Screen1;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  codeBlock: {
    backgroundColor: 'rgba(55, 65, 81, 1)',
    marginVertical: 12,
    padding: 12,
    borderRadius: 4,
  },
  monospace: {
    color: '#ffffff',
    fontFamily: 'Courier New',
    marginVertical: 4,
  },
  comment: {
    color: '#cccccc',
  },
  marginBottomSm: {
    marginBottom: 6,
  },
  marginBottomMd: {
    marginBottom: 18,
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  textLight: {
    fontWeight: '300',
  },
  textBold: {
    fontWeight: '500',
  },
  textCenter: {
    textAlign: 'center',
  },
  text2XS: {
    fontSize: 12,
  },
  textXS: {
    fontSize: 14,
  },
  textSm: {
    fontSize: 16,
  },
  textMd: {
    fontSize: 18,
  },
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
  textContainer: {
    marginVertical: 12,
  },
  textSubtle: {
    color: '#6b7280',
  },
  section: {
    marginVertical: 24,
    marginHorizontal: 12,
  },
  shadowBox: {
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
  hero: {
    borderRadius: 12,
    backgroundColor: '#143055',
    padding: 36,
    marginBottom: 24,
  },
  heroTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  heroTitleText: {
    color: '#ffffff',
    marginLeft: 12,
  },
  heroText: {
    color: '#ffffff',
    marginVertical: 12,
  },
  whatsNextButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 8,
    width: '50%',
    marginTop: 24,
  },
  learning: {
    marginVertical: 12,
  },
  love: {
    marginTop: 12,
    justifyContent: 'center',
  },
});
