import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Top from './Containers/Top';
import Grid from './Containers/Grid';
import Bottom from './Containers/Bottom';

export default function App() {
  return (
    <View style={styles.container}>
      <Top />
      <Grid />
      <Bottom />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '95%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
