// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabBarIcon({ style, ...props }) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...props} />;
}