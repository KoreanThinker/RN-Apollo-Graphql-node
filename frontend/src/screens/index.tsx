import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './HomeScreen'

const MainStack = createStackNavigator(
    {
        HomeScreen
    },
    {

    }
);

export default createAppContainer(MainStack)