import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppButton from '../components/AppButton';
import PerfumeCard from '../components/PerfumeCard';
import EmptyState from '../components/EmptyState';
import useStore from '../context/useStore';

const HomeScreen = () => {
  const navigation = useNavigation();
  const perfumes = useStore((state) => state.perfumes);

  const renderItem = ({ item }) => (
    <PerfumeCard
      name={item.name}
      brand={item.brand}
      notes={item.notes}
      onPress={() => navigation.navigate('Inventory')}
    />
  );

  return (
    <View style={styles.container}>

      <View style={styles.buttonsRow}>
        <AppButton title="Inventario" onPress={() => navigation.navigate('Inventory')} style={styles.button} />
        <AppButton title="Recomendar" onPress={() => navigation.navigate('Recommend')} style={styles.button} />
        <AppButton title="Clima" onPress={() => navigation.navigate('Weather')} style={styles.button} />
      </View>

      <Text style={styles.sectionTitle}>Tus perfumes</Text>

      {(!perfumes || perfumes.length === 0) ? (
        <EmptyState message="No tienes perfumes guardados. Agrega el primero." />
      ) : (
        <FlatList
          data={perfumes}
          keyExtractor={(item) => item.id?.toString() || item.name}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}

      <View style={styles.addButton}>
        <AppButton title="Agregar perfume" onPress={() => navigation.navigate('Add')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  button: {
    minWidth: 100,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 8,
  },
  list: {
    paddingBottom: 80,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
});

export default HomeScreen;