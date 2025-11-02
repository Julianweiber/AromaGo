import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import InventoryScreen from '../screens/InventoryScreen';
import AddPerfumeScreen from '../screens/AddPerfumeScreen';
import WeatherScreen from '../screens/WeatherScreen';
import RecommendScreen from '../screens/RecommendScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'AromaGo',
          headerShown: true,
        }}
      />
      <Stack.Screen 
        name="Inventory" 
        component={InventoryScreen}
        options={{
          title: 'Inventario',
        }}
      />
      <Stack.Screen 
        name="Add" 
        component={AddPerfumeScreen}
        options={{
          title: 'Agregar Perfume',
        }}
      />
      <Stack.Screen 
        name="Weather" 
        component={WeatherScreen}
        options={{
          title: 'Clima',
        }}
      />
      <Stack.Screen 
        name="Recommend" 
        component={RecommendScreen}
        options={{
          title: 'Recomendaciones',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
