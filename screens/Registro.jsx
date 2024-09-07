import { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { criarConta } from '../infra/usuarios';
import Button from '../components/Button';
import { inserirUsuario } from '../infra/perfil';

export default function Registro({ navigation }) {
  const [usuario, setUsuario] = useState({
    email: '',
    senha: ''
  });
  const [erros, setErros] = useState('');

  async function handlePress() {
    const retorno = await criarConta(usuario.email, usuario.senha);
    if (retorno.id) {
      const id = await inserirUsuario(retorno);
      alert("id do usuario no db" + id)
      alert("Conta criada com sucesso!!" + retorno.id);
      setErros("");
    } else {
      setErros("Erro ao criar conta.");
    }
  }

  return (
    <View className="flex-1 justify-center gap-3 p-5">
      <Text className="font-bold text-2xl self-center">Criar Conta</Text>
      <TextInput
        label="Email"
        mode="outlined"
        placeholder="Digite seu email"
        value={usuario.email}
        onChangeText={email => setUsuario({ ...usuario, email: email })}
      />
      <TextInput
        label="Senha"
        mode="outlined"
        placeholder="Digite sua senha"
        value={usuario.senha}
        secureTextEntry={true}
        onChangeText={senha => setUsuario({ ...usuario, senha: senha })}
      />

      {erros && <Text className=" self-center text-red-500">{erros}</Text>}
      
      <View className="justify-center flex-row items-center">
        <Text className="">Já tem uma conta?</Text>
        <Button
          mode="text"
          onPress={() => navigation.navigate('Login')}
        >
          Entre aqui.
        </Button>
      </View>
      <Button
        mode='contained'
        onPress={handlePress}
      >
        Criar Conta
      </Button>
    </View>
  );
}