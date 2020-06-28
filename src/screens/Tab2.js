import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tab2 = ({navigation}) => {
  return (
    <View style={styles.master}>
      <Text style={styles.header}>Tab2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
  },
});

export default Tab2;
