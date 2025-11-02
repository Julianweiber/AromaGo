import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import { usePerfumeStore } from '../store/inventory';

export default function Recommend() {
  const perfumes = usePerfumeStore(s => s.perfumes);
  const [occasion, setOccasion] = useState('oficina');
  const [tempC, setTempC] = useState(null);
  const [result, setResult] = useState('');

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;
    const { coords } = await Location.getCurrentPositionAsync({});
    setTempC(26); // Simulación por ahora
  };

  const recommend = () => {
    const top = perfumes.slice(0,3).map(x => '• ' + x.name).join('\n');
    setResult(\`Top sugeridos para \${occasion} (\${tempC ?? '?'}°C):\n\${top || 'Cargá perfumes primero'}\`);
  };

  return (
    <View style={{ padding:16, gap:12 }}>
      <Text>Ocasión: {occasion}</Text>
      <View style={{ flexDirection:'row', gap:8 }}>
        <Button title='Oficina' onPress={() => setOccasion('oficina')} />
        <Button title='Cita' onPress={() => setOccasion('cita')} />
        <Button title='Salida' onPress={() => setOccasion('salida')} />
      </View>
      <Button title='Usar mi ubicación' onPress={getLocation} />
      <Button title='Sugerir ahora' onPress={recommend} />
      {result ? <Text style={{ marginTop:12 }}>{result}</Text> : null}
    </View>
  );
}
