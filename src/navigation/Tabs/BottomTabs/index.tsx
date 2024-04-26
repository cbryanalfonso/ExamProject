import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BanksScreen from '../../../screens/shared/Banks/view/screens/index';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={BanksScreen} />
      <Tab.Screen name="Settings" component={BanksScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
