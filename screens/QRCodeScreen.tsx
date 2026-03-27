import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your QR Code</Text>
      <QRCode value="https://your-app-link.com" size={220} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#2D2D2D',
  },
});

export default QRCodeScreen;
