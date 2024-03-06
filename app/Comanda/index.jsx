import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../componentes/Button";
import Input from "../../componentes/Button/Input";

export default function Comanda() {
    return (
        <View style={styles.container}>
            <Text>Olá</Text>
            <Text>Eric L. Demate</Text>
            
            <Input placeholder="comanda"/>
            <Button>confirmar</Button>
            <Button>entrar</Button>
        </ View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})