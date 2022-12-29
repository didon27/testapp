import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TransactionDetails from '~/screens/TransactionDetails';
import Transactions from '~/screens/Transactions';
import { RouteNames } from './routeNames';

const MainStack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <MainStack.Navigator
            screenOptions={() => ({
                headerShadowVisible: false,
                headerBackTitle: ''
            })}>
            <MainStack.Screen
                name={RouteNames.transacrions}
                component={Transactions}
            />
            <MainStack.Screen
                name={RouteNames.transacrionDetails}
                component={TransactionDetails}
            />
        </MainStack.Navigator>
    )
}

export default Navigation;