import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import homepage from './asset/home/home';
import rules from './asset/search/search';
import literature from './asset/literatures/literature';
import finder from './asset/school finder/finder';
import performance from './asset/performance/performance';
import utme from './asset/practice/utme';
import exam from './asset/practice/tab/exam/exam'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Jamb Utme Practice',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Jamb Utme Practice"
          component={homepage}
        />
        <Stack.Screen name="Rules" component={rules} />
        <Stack.Screen options={{headerShown: false}} name="Exam" component={exam} />
        <Stack.Screen name="Literature" component={literature} />
        <Stack.Screen name="Utme practice" component={utme} />
        <Stack.Screen name="School finder" component={finder} />
        <Stack.Screen name="Performance" component={performance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
