import { StyleSheet, Text, View, Pressable } from 'react-native';
import { RadioButton as RadioPaper } from 'react-native-paper';

export default function RadioButton({ items, valueChecked, setValueChecked }) {
  return (
    <View>
      {
        items.map((radio, index) => {
          return (
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
          }}>
              <RadioPaper
                  key={index}
                  value={radio.value}
                  status={valueChecked === radio.value ? 'checked' : 'unchecked'}
                  onPress={() => setValueChecked(radio.value)}
              />
              { radio.label && <Text onPress={() => setValueChecked(radio.value)}>{radio.label}</Text> }
          </View>
          )
        })
      }
    </View>
  );
}
