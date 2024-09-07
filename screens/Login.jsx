import { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { logarUsuario } from '../infra/usuarios';
import Button from '../components/Button';
import { UsuarioContext } from '../hooks/UsuarioContext';

export default function Login({ navigation }) {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const [novoUsuario, setNovoUsuario] = useState({
    email: '',
    senha: ''
  });

  const [erros, setErros] = useState('');

  async function handlePress() {
    const retorno = await logarUsuario(novoUsuario.email, novoUsuario.senha);
    if (retorno.id) {
      alert("Logado com sucesso!!" + retorno.id);
      setUsuario({ ...novoUsuario, id: retorno.id });
      navigation.navigate('Registro')
    } else {
      setErros("Erro ao entrar.");
    }
  }

  return (
    <View className="flex-1 justify-center gap-3 p-5">
      <Text className="font-bold text-2xl self-center">Entrar</Text>
      <TextInput
        label="Email"
        mode="outlined"
        placeholder="Digite seu email"
        value={novoUsuario.email}
        onChangeText={email => setNovoUsuario({ ...novoUsuario, email: email })}
      />
      <TextInput
        label="Senha"
        mode="outlined"
        placeholder="Digite sua senha"
        value={novoUsuario.senha}
        secureTextEntry={true}
        onChangeText={senha => setNovoUsuario({ ...novoUsuario, senha: senha })}
      />

      {erros && <Text className=" self-center text-red-500">{erros}</Text>}

      <View className="justify-center flex-row items-center">
        <Text className="">Não tem uma conta?</Text>
        <Button
          
          mode="text"
          onPress={() => navigation.navigate('Registro')}
        >
          Entre aqui.
        </Button>
      </View>
      <Button
        mode="text"
        onPress={() => navigation.navigate('EsqueciMinhaSenha')}
      >
        Esqueci minha senha
      </Button>

      <Button
        mode='contained'
        onPress={handlePress}
      >
        Entrar
      </Button>
    </View>
  );
}