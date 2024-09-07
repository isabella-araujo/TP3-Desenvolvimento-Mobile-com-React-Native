import React, { useState } from 'react'
import { Switch as SwitchPaper } from 'react-native-paper';

export default function Switch() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SwitchPaper value={isSwitchOn} onValueChange={onToggleSwitch} />
  )
}
