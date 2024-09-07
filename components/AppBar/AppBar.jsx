import React from 'react'
import { Appbar as AppbarPaper } from 'react-native-paper'

export default function AppBar({ back, navigation, children }) {
  return (
    <AppbarPaper>
      {back ? <AppbarPaper.BackAction onPress={() => navigation.goBack()} /> : null}
      {children}
    </AppbarPaper>
  )
}
