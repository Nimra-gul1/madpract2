import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
   

      <Text style={styles.paragraph}>
        im nimra gul software engineering student
      </Text>
      
      <Text>nimra gul bulbul</Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  paragraph: {
    margin: 19,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});