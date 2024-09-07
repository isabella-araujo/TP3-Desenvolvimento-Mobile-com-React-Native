import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { FAB, Provider as PaperProvider, Portal } from 'react-native-paper'

export default function FabGroup({ icon01, icon02, actions, ...props }) {
  const [state, setState] = useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  return (
    <PaperProvider>
      <Portal>
        <FAB.Group
          {...props}
          backdropColor="transparen"
          open={open}
          visible
          icon={open ? icon01 : icon02}
          actions={actions}
          onStateChange={onStateChange}
          style={{ flex: 1, position: 'absolute', zIndex: 1000, top: -55 }}
        />
      </Portal>
    </PaperProvider>
  )
}

