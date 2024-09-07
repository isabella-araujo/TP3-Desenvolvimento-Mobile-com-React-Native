import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login.jsx';
import Settings from './screens/Settings.jsx';
import Registro from './screens/Registro.jsx';
import NovoItem from './screens/NovoItem.jsx';
import EsqueciMinhaSenha from './screens/EsqueciMinhaSenha.jsx';
import { useState } from 'react';
import { UsuarioContext } from './hooks/UsuarioContext.jsx';
import TabLayout from './components/TabLayout.jsx';
import { Provider as PaperProvider } from 'react-native-paper'

const Stack = createNativeStackNavigator();
export default function App() {
  const [usuario, setUsuario] = useState({ id: '' });

  return (
    <PaperProvider>
      <NavigationContainer>
        {usuario?.id &&
          <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            <Stack.Navigator>
              <Stack.Screen
                name="TabLayout"
                component={TabLayout}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Settings"
                component={Settings}
              />
              <Stack.Screen
                name="NovoItem"
                component={NovoItem}
              />
            </Stack.Navigator>
          </UsuarioContext.Provider>
        }

        {!usuario?.id &&
          <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            <Stack.Navigator initialRouteName="Login" component={Login}>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Registro"
                component={Registro}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EsqueciMinhaSenha"
                component={EsqueciMinhaSenha}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </UsuarioContext.Provider>
        }
      </NavigationContainer >
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
