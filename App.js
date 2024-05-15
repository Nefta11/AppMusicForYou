import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Screens/HomeScreen.jsx';
import GenresScreen from './src/Screens/GenresScreen.jsx';
import CreateScreen from './src/Screens/CreateScreen.jsx';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Create':
                iconName = focused ? 'add-circle' : 'add-circle-outline';
                break;
              case 'Genres':
                iconName = focused ? 'disc' : 'disc-outline';
                break;
            }
            return <Ionicons name={iconName} size={29} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: 72, 
            paddingBottom: 5, 
            paddingTop: 5,
          },
          headerStyle: {
            height: 30 
          },
          headerTitle: ''
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Tab.Screen name="Create" component={CreateScreen} options={{ title: 'Crear' }} />
        <Tab.Screen name="Genres" component={GenresScreen} options={{ title: 'Géneros' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
