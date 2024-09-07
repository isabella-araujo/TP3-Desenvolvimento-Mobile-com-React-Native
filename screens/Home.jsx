import { Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { deslogarUsuario } from '../infra/usuarios';
import { useContext } from 'react';
import { UsuarioContext } from '../hooks/UsuarioContext';
import FabGroup from '../components/Fab/FabGroup';
import Table from '../components/Table'

export default function Home({navigation}) {
  const { usuario, setUsuario } = useContext(UsuarioContext);

  async function handlePress() {
    let retorno = await deslogarUsuario();
    setUsuario(retorno);
    navigation.navigate("Login");
  }

  const titulos = ["Entrada", "Prato Principal", "Sobremesa"];
  const pratos = [
    {
      entrada: "Salada",
      pratoPrincipal: "Frango grelhado",
      sobremesa: "Pudim"
    },
    {
      entrada: "Sopa",
      pratoPrincipal: "Bife à milanesa",
      sobremesa: "Torta de maçã"
    },
    {
      entrada: "Bruschetta",
      pratoPrincipal: "Risoto de cogumelos",
      sobremesa: "Mousse de chocolate"
    },
    {
      entrada: "Carpaccio",
      pratoPrincipal: "Lasanha",
      sobremesa: "Cheesecake"
    },
    {
      entrada: "Ceviche",
      pratoPrincipal: "Salmão grelhado",
      sobremesa: "Sorvete de morango"
    },
    {
      entrada: "Canapé",
      pratoPrincipal: "Espaguete à carbonara",
      sobremesa: "Tiramisu"
    },
    {
      entrada: "Salada de frutas",
      pratoPrincipal: "Peixe assado",
      sobremesa: "Pavê de chocolate"
    },
    {
      entrada: "Caldinho de feijão",
      pratoPrincipal: "Feijoada",
      sobremesa: "Quindim"
    },
    {
      entrada: "Cuscuz",
      pratoPrincipal: "Moqueca de peixe",
      sobremesa: "Bolo de cenoura"
    },
    {
      entrada: "Pastel",
      pratoPrincipal: "Feijão tropeiro",
      sobremesa: "Pudim de leite"
    },
    {
      entrada: "Coxinha",
      pratoPrincipal: "Strogonoff de frango",
      sobremesa: "Brigadeiro"
    },
    {
      entrada: "Esfiha",
      pratoPrincipal: "Kibe assado",
      sobremesa: "Rabanada"
    },
    {
      entrada: "Tapioca",
      pratoPrincipal: "Bobó de camarão",
      sobremesa: "Manjar de coco"
    },
    {
      entrada: "Pão de queijo",
      pratoPrincipal: "Feijoada",
      sobremesa: "Pudim de tapioca"
    },
    {
      entrada: "Empada",
      pratoPrincipal: "Risoto de frutos do mar",
      sobremesa: "Torta de limão"
    },
    {
      entrada: "Bolinho de bacalhau",
      pratoPrincipal: "Bacalhoada",
      sobremesa: "Pavê de maracujá"
    },
    {
      entrada: "Coxinha de frango",
      pratoPrincipal: "Feijoada",
      sobremesa: "Pudim de leite condensado"
    },
    {
      entrada: "Quibe",
      pratoPrincipal: "Escondidinho de carne seca",
      sobremesa: "Pudim de maracujá"
    },
    {
      entrada: "Pastel de queijo",
      pratoPrincipal: "Feijoada",
      sobremesa: "Torta de banana"
    }
  ]

  const titles = [
    { label: 'Settings', icon: "account-cog", onPress: () => navigation.navigate("Settings") },
    { label: 'Logout', icon: 'logout', onPress: () => handlePress() },
  ];

  return (
    <PaperProvider>
      <View className="flex-1">
        <Text>Home</Text>
        <Table data={pratos} titles={titulos} itensPorPagina={10}/>
        <FabGroup icon01="dots-vertical" icon02="dots-vertical" actions={titles}/>
      </View>
    </PaperProvider>

  );
}
