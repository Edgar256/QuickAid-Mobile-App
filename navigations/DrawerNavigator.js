import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StaffAmbulanceDispatch, StaffAmbulanceTracking, StaffSettings, UserAccount, UserHistory, UserLanding} from '../screens';
import {COLORS} from '../constants';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Ambulance Dispatch"
      screenOptions={{
        headerTitleAlign: 'center',
        activeTintColor: COLORS.black,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.gray,
          borderTopWidth: 1,
          paddingBottom: 2,
        },
        headerStyle: {
          backgroundColor: COLORS.black,
        },
        headerTintColor: COLORS.white,
      }}>
      <Tab.Screen
        name="Ambulance Dispatch"
        component={StaffAmbulanceDispatch}
        options={{
          tabBarLabel: 'Ambulance Dispatch',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="history"
              size={25}
              color={COLORS.black}
              style={{marginBottom: 1}}
            />
          ),
          //   tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Ambulance Tracking"
        component={StaffAmbulanceTracking}
        options={{
          tabBarLabel: 'Ambulance Tracking',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="ambulance"
              size={25}
              color={COLORS.black}
              style={{marginBottom: 1}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Staff Settings"
        component={StaffSettings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="user"
              size={25}
              color={COLORS.black}
              style={{marginBottom: 1}}
            />
          ),
          //   tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
