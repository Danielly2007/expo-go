import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>eu sou muito foda app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#000',
    backgroundColor: '#E6B4FF',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
