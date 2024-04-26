import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BanksScreen from '../../../screens/shared/Banks/view/screens/index';
import TabBarIcon from './components/TabBarIcon/index';
import HeaderHome from '../../../components/Header/index';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={BanksScreen}
        options={{
          header: () => <HeaderHome title='Home'/>,
          tabBarIcon: () => <TabBarIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
