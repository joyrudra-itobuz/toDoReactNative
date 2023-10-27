import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from './components/CustomText';

export default function App() {
  return (
    <View>
      <View>
        <CustomText children={"Today's Tasks"} style={styles.customText} />

        <View>{/* tasks Will be Here */}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 32,
    fontWeight: '700',
    fontFamily: 'Poppins',
  },
  customText: {
    padding: 16,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    backgroundColor: '#89c6f0',
    color: '#0f0f0f',
  },
});
