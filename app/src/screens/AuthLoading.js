import * as React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

export default AuthLoading = () => (
  <FAB
    style={styles.fab}
    small
    icon="add"
    onPress={() => console.log('Pressed')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    // bottom: 2,
  },
});
