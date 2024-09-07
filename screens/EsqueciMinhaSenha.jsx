import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Button from '../components/Button';
import { useState } from 'react';
import { redefinirSenha } from '../infra/usuarios';

export default function EsqueciMinhaSenha({navigation}) {
  const [novoUsuario, setNovoUsuario] = useState({
    email: '',
  });
  const [mensagem, setMensagem] = useState('');

  async function handlePress() {
    const retorno = await redefinirSenha(novoUsuario.email);
    setMensagem(retorno);
  }

  return (
    <View className="flex-1 justify-center gap-3 p-5">
      <Text className="font-bold text-2xl self-center">Esqueci minha senha</Text>
      <TextInput
        label="Email"
        mode="outlined"
        placeholder="Digite seu email"
        value={novoUsuario.email}
        onChangeText={email => setNovoUsuario({ ...novoUsuario, email: email })}
      />

      <View className="justify-center flex-row items-center">
        <Text className="">Lembrou a senha?</Text>
        <Button
          mode="text"
          onPress={() => navigation.navigate('Login')}
        >
          Entre aqui.
        </Button>
      </View>
      {
        mensagem !== '' &&
        <Text className="text-red-500">{mensagem}</Text>
      }

      <Button
        mode='contained'
        onPress={handlePress}
      >
        Recuperar Senha
      </Button>
    </View>
  )
}