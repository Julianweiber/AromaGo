/**
 * @description Proyecto AromaGo — desarrollado por Julián Weiber.
 * Asistente Copilot: mantener estilo modular, moderno, basado en Expo + React Native.
 * Meta: construir un MVP que recomienda perfumes según clima y usuario.
 * Arquitectura: Screens, Components, Context, Utils.
 * Librerías clave: React Navigation, Expo Location, OpenWeather API, HuggingFace.
 * Prioridad: código claro, reutilizable y con diseño adaptable (mobile-first).
 */
/**
 * AromaGo — MVP (RN + Expo).
 * Copilot: sugerí código modular (screens/components/hooks/services), navegación stack,
 * estado con Zustand, clima con OpenWeather, reglas en utils/scoring.
 * Evitar dependencias innecesarias.
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNavigator />
    </NavigationContainer>
  );
}

