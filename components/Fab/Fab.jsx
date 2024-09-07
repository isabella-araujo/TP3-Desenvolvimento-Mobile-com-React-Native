import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

export default function Fab(props) {
  return <FAB style={styles.fab} {...props} />;
}

const styles = StyleSheet.create({
  fab: {
    margin: 0,
    width: 55,
    height: 55
  },
});