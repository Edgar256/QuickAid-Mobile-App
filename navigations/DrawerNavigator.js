import {createDrawerNavigator} from '@react-navigation/drawer';
import DispatchHistoryScreen from '../screens/staff/DispatchHistory';
import DashboardScreen from '../screens/staff/Dashboard';

const Drawer = createDrawerNavigator();

// Drawer navigation containing bottom tab navigation
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="DispatchHistoryScreen">
      <Drawer.Screen
        name="DispatchHistoryScreen"
        component={DispatchHistoryScreen}
      />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
