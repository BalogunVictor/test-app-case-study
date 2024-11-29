import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {AvatarIcon, HomeIcon} from '../../../assets/icons';
import {colors, fontPixel, pixelSizeVertical} from '../../common/GlobalStyles';
import Profile from './Profile';
import Home from './Home';

const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    name: 'Home',
    component: Home,
    icon: HomeIcon,
  },
  {
    name: 'Profile',
    component: Profile,
    icon: AvatarIcon,
  },
];

const AuthenticatedStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: pixelSizeVertical(8),
          paddingBottom: pixelSizeVertical(4),
          height: pixelSizeVertical(65),
          backgroundColor: colors.white,
        },
        tabBarActiveTintColor: colors.dark_blue,
        tabBarInactiveTintColor: colors.text_grey,
        tabBarItemStyle: {
          paddingBottom: pixelSizeVertical(4),
        },
        tabBarIconStyle: {
          paddingHorizontal: '50%',
          marginBottom: pixelSizeVertical(6),
        },
        tabBarLabelStyle: {
          fontSize: fontPixel(11),
          fontFamily: 'Jost',
        },
      }}>
      {tabScreens.map(({name, component, icon: IconComponent}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <IconComponent
                color={focused ? colors.dark_blue : colors.text_grey}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AuthenticatedStack;
