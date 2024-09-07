import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Avatar from '../components/Avatar';
import image from '../assets/avatar.jpg'
import { TextInput } from 'react-native-paper';
import Button from '../components/Button';
import Fab from '../components/Fab/Fab';
import { useContext, useRef, useState } from 'react';
import { UsuarioContext } from '../hooks/UsuarioContext';
import { atualizarEmail, atualizarSenha } from '../infra/usuarios';
import { FIREBASE_AUTH } from '../infra/firebase';
import { alterarUsuario } from '../infra/perfil';
import * as ImagePicker from "expo-image-picker";
import Camera from '../components/Camera';
import CameraScreen from '../components/Camera';

export default function Perfil() {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const [credenciais, setCredenciais] = useState({
    email: '',
    senha: '',
    avatar: null,
    nome: '',
    sobrenome: '',
    nomeUsuario: '',
  });
  const [cameraVisible, setCameraVisible] = useState(false);
  const cameraRef = useRef(null);

  async function escolherImagem() {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setCredenciais({ ...credenciais, avatar: result.assets[0].uri });
    }
  }

  async function atualizarUsuario() {
    const usuario = FIREBASE_AUTH.currentUser;

    if (credenciais.email) await atualizarEmail(usuario, credenciais.email);
    if (credenciais.senha) await atualizarSenha(usuario, senha);
    if (credenciais) await alterarUsuario(credenciais);
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer} className="flex-1 gap-7 p-5">
      <View>
        <Avatar
          className="self-center"
          image={credenciais.avatar ? { uri: credenciais.avatar } : image}
          size={210}
        />
        <Fab
          onPress={() => setCameraVisible(true)}
          className="absolute left-16 bottom-1"
          icon="camera"
        />
        <Fab
          onPress={escolherImagem}
          className="absolute right-16 bottom-1"
          icon="image"
        />
      </View>
      <TextInput
        label="Email"
        mode="outlined"
        placeholder="Digite seu email"
        value={credenciais.email}
        onChangeText={(email) => setCredenciais({ ...credenciais, email: email })}
      />
      <TextInput
        label="Senha"
        mode="outlined"
        placeholder="Digite sua senha"
        value={credenciais.senha}
        onChangeText={(senha) => setCredenciais({ ...credenciais, senha: senha })}
      />
      <TextInput
        label="Nome"
        mode="outlined"
        placeholder="Digite seu nome"
        value={credenciais.nome}
        onChangeText={(nome) => setCredenciais({ ...credenciais, nome: nome })}
      />
      <TextInput
        label="Sobrenome"
        mode="outlined"
        placeholder="Digite seu sobrenome"
        value={credenciais.sobrenome}
        onChangeText={(sobrenome) => setCredenciais({ ...credenciais, sobrenome: sobrenome })}
      />
      <TextInput
        label="Nome de Usuário"
        mode="outlined"
        placeholder="Ex: @ana"
        value={credenciais.nomeUsuario}
        onChangeText={(nomeUsuario) => setCredenciais({ ...credenciais, nomeUsuario: nomeUsuario })}
      />
      <Button
        className="justify-self-center"
        mode='contained'
        onPress={atualizarUsuario}
      >
        Salvar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  }
})