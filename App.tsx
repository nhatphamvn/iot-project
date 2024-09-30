import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const App = () => {
  const [temperature, setTemperature] = React.useState(25); // Đơn vị: độ C
  const [fireDetected, setFireDetected] = React.useState(false);

  const checkFire = () => {
    // Giả lập phát hiện cháy
    setFireDetected(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ứng dụng IoT - Cảm biến Nhiệt và Cháy</Text>

      <View style={styles.sensorContainer}>
        <Text style={styles.sensorTitle}>Cảm biến Nhiệt độ:</Text>
        <Text style={[styles.sensorValue, { color: temperature > 30 ? 'red' : 'orange' }]}>
          {temperature} °C
        </Text>
      </View>

      <View style={styles.sensorContainer}>
        <Text style={styles.sensorTitle}>Cảm biến Cháy:</Text>
        <Text style={[styles.sensorValue, { color: fireDetected ? 'red' : 'green' }]}>
          {fireDetected ? 'Cháy đã phát hiện!' : 'An toàn'}
        </Text>
      </View>

      <Button title="Kiểm tra cháy" onPress={checkFire} color="#FF5722" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sensorContainer: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  sensorTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  sensorValue: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default App;
