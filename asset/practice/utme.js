import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Subject from './tab/subject/subject';

const Tab = createMaterialTopTabNavigator();

function utme() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#000',
                labelStyle: { fontSize: 12 },
                style: { backgroundColor: '#fff' },
                indicatorStyle: {
                    height: null,
                    top: 0,
                    borderBottomColor: 'green',
                    backgroundColor: '#fff',
                    borderBottomWidth: 2
                },
            }}
        >
            <Tab.Screen
                name="Subject"
                component={Subject}
                options={{ tabBarLabel: 'Subject' }}
            />
            {  /*
            <Tab.Screen
                name="Time"
                component={Time}
                options={{ tabBarLabel: 'Time' }}
            />
            */
            }
        </Tab.Navigator>
    );
}
export default utme;