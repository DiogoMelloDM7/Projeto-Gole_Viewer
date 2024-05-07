import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Welcome} from '../pages/Welcome'
import {SignIn} from '../pages/SignIn'
import {Functions} from '../pages/Functions'
import { AnotherPhone } from '../pages/AnotherPhone'
import {SignUp} from '../pages/SignUp'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}} />

            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="Functions"
            component={Functions}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="AnotherPhone"
            component={AnotherPhone}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}