import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../screens/Home';
import plusIcon from '../assets/images/plus-icon.png';

const Tab = createBottomTabNavigator();
const [iconColor, iconSize] = ['white', 25];

const HomeButtonTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarStyle: {backgroundColor: 'black'},
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home"
              color={iconColor}
              size={iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={() => <Text>Search</Text>}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: () => (
            <AntDesign name="search1" color={iconColor} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name={'Upload'}
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <Image
              source={plusIcon}
              style={{height: 35, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Inbox'}
        component={Home}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="message-minus-outline"
              color={iconColor}
              size={iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Home}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <AntDesign name="user" color={iconColor} size={iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeButtonTabNavigator;
