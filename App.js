import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import styles from './AppStyles';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card />
      <StatusBar style="auto" />
    </View>
  );
}
