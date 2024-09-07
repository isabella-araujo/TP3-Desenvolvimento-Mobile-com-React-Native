import React from 'react'
import { Avatar as AvatarPaper } from 'react-native-paper';

export default function Avatar({image, size, ...props}) {
  return (
    <AvatarPaper.Image size={size ? size : 24} source={image} {...props} />
  )
}
