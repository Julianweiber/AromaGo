import { useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import { usePerfumeStore } from '../store/inventory';

export default function Inventory({ navigation }) {
  const perfumes = usePerfumeStore(s => s.perfumes);
  const load = usePerfumeStore(s => s.load);

  useEffect(() => { load(); }, []);

  return (
    <View style={{ flex:1, padding:16 }}>
      <FlatList
        data={perfumes}
        keyExtractor={x => x.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('AddEdit', { perfume: item })}
            style={{ flexDirection:'row', alignItems:'center', gap:12, marginBottom:12 }}>
            {item.photoUri ? (
              <Image source={{ uri:item.photoUri }} style={{ width:56, height:56, borderRadius:8 }} />
            ) : null}
            <View>
              <Text style={{ fontWeight:'600' }}>{item.name}</Text>
              <Text>{item.brand}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>No hay perfumes aún</Text>}
      />
      <View style={{ gap:8 }}>
        <Button title='Agregar perfume' onPress={() => navigation.navigate('AddEdit')} />
        <Button title='Recomendar ahora' onPress={() => navigation.navigate('Recommend')} />
      </View>
    </View>
  );
}
