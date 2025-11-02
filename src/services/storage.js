import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@AromaGo:perfumes';

export const savePerfumes = async (perfumes) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(perfumes));
  } catch (error) {
    console.error('Error saving perfumes:', error);
    throw error;
  }
};

export const loadPerfumes = async () => {
  try {
    const perfumesJson = await AsyncStorage.getItem(STORAGE_KEY);
    return perfumesJson ? JSON.parse(perfumesJson) : [];
  } catch (error) {
    console.error('Error loading perfumes:', error);
    throw error;
  }
};