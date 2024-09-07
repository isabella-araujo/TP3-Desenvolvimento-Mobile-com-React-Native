import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Snackbar as SnackbarPaper } from 'react-native-paper';

export default function Snackbar({ props, children }) {

  return (
    <View style={styles.container}>
      <SnackbarPaper 
        visible={true}
        {...props}
      >
        {children}
      </SnackbarPaper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});