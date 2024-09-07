import { Button as ButtonPaper } from 'react-native-paper';

export default function Button({ children, mode, ...props}) {
  return <ButtonPaper mode={mode ? mode : "contained"} {...props}>{children}</ButtonPaper>;
}