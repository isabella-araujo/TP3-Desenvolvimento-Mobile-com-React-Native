import { Text, View } from 'react-native';
import RadioButtonGroup from '../components/RadioButtonGroup';
import { useEffect, useState } from 'react';
import RadioButton from '../components/RadioButton';

export default function Settings() {
  const [valueChecked, setValueChecked] = useState('1');

  useEffect(() => {
    changeTheme(valueChecked)
  }, [valueChecked]);


  const options = [
    { label: 'Automático', value: 'auto' },
    { label: 'Dark', value: 'dark' },
    { label: 'Light', value: 'light' },
  ]

  useEffect(() => {
    setValueChecked(theme === null ? "auto" : theme);
  }, []);

  return (
    <View>
      <RadioButtonGroup>
        <RadioButton
          valueChecked={valueChecked}
          setValueChecked={setValueChecked}
          items={options}
        />
      </RadioButtonGroup>
    </View>
  );
}