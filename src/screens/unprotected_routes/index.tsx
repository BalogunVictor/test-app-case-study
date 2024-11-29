import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {colors} from '../../common/GlobalStyles';
import SignIn from './SignIn';
import Onboarding from './Onboarding';
import SignUp from './SignUp';

const UnauthenticatedStack = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.navigate('Login');
  // }, [navigation]);
  useEffect(() => {
    const backAction = () => {
      // Prevent going back
      return true;
    };

    // Add back button event listener
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove(); // Clean up the listener when component unmounts
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
          statusBarColor: colors.dark_blue,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
          presentation: 'fullScreenModal',
          statusBarColor: colors.white,
          statusBarStyle: 'dark',
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
          presentation: 'fullScreenModal',
          statusBarColor: colors.white,
          statusBarStyle: 'dark',
        }}
      />
    </Stack.Navigator>
  );
};
export default UnauthenticatedStack;
