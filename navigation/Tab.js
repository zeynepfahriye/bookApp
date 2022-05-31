import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {Home} from '../screens';
import {COLORS, icons} from '../constants';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;
          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.dashboard}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );

            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );

            case 'Notifications':
              return (
                <Image
                  source={icons.notifications}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );

            case 'Settings':
              return (
                <Image
                  source={icons.settings}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );
          }
        },
        tabBarShowLabel:false,
        tabBarStyle:{
            backgroundColor:COLORS.black,
            height:"10%",
        },
        headerShown:false
      
      })} 
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />

      <Tab.Screen name="Notifications" component={Home} />

      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};
export default Tabs;
