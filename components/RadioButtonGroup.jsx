import {RadioButton as RadioButtonPaper} from 'react-native-paper';
import { useState } from 'react';
import { View } from 'react-native';

export default function RadioButtonGroup({ children, ...props }) {

  return (
    <RadioButtonPaper.Group {...props}>
      {children}
    </RadioButtonPaper.Group>
  );
}
