import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {UserAccount, UserHistory, UserLanding} from '../screens';
import {COLORS} from '../constants';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="UserLanding"
      screenOptions={{
        headerTitleAlign: 'center',
        activeTintColor: COLORS.primary,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.gray,
          borderTopWidth: 1,
          paddingBottom: 2,
        },
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
        headerTintColor: COLORS.white,
      }}>
      <Tab.Screen
        name="UserHistory"
        component={UserHistory}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="history"
              size={35}
              color="#900"
              style={{marginBottom: 1}}
            />
          ),
          //   tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="UserLanding"
        component={UserLanding}
        options={{
          tabBarLabel: 'Order Ambulance',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="ambulance"
              size={35}
              color="#900"
              style={{marginBottom: 1}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserAccount"
        component={UserAccount}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="user"
              size={35}
              color="#900"
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