import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './componentes/Button';
import Comanda from './app/Comanda';
import Input from './componentes/Button/Input';

export default function App() {
  return <Comanda> </Comanda>;
  
  return (
    <View style={styles.container}>
      <Text>Sistema</Text>
      <Text style={styles.title}>Comanda</Text>
      <StatusBar style="auto" />
      <Input placeholder = "email"/>
      <TextInput style={styles.input} placeholder='senha' secureTextEntry />
      <Button>Entrar</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '121A2C',
    fontSize: 24,
    fontWeight: 'bold'
  },
  
});
