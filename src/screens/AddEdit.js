import { useState } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { usePerfumeStore } from '../store/inventory';

export default function AddEdit({ navigation, route }) {
  const editing = route?.params?.perfume;
  const [name, setName] = useState(editing?.name || '');
  const [brand, setBrand] = useState(editing?.brand || '');
  const [photoUri, setPhotoUri] = useState(editing?.photoUri || '');
  const add = usePerfumeStore(s=>s.add);

  const pick = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (perm.status !== 'granted') return;
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7
    });
    if (!res.canceled) setPhotoUri(res.assets[0].uri);
  };

  const save = async () => {
    const p = { id: editing?.id || Date.now().toString(), name, brand, photoUri };
    await add(p);
    navigation.goBack();
  };

  return (
    <View style={{ padding:16, gap:12 }}>
      <TextInput placeholder='Nombre' value={name} onChangeText={setName} style={{ borderWidth:1, borderRadius:8, padding:8 }} />
      <TextInput placeholder='Marca' value={brand} onChangeText={setBrand} style={{ borderWidth:1, borderRadius:8, padding:8 }} />
      {photoUri ? <Image source={{ uri:photoUri }} style={{ width:120, height:120, borderRadius:12 }} /> : null}
      <Button title='Elegir foto' onPress={pick} />
      <Button title='Guardar' onPress={save} />
    </View>
  );
}
