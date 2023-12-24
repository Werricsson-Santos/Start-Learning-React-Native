import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import  { Container, Button, Title, Grid } from "../../Components/index";
import { ScrollView } from 'react-native';


export default function HomeScreen() {
        const navigation =  useNavigation();
        const toNavigationScreen = () => {
            navigation.navigate("Navigation");
        };
        const toApiScreen = () => {
            navigation.navigate("API")
        }
    return (
        <Container>
            <Title text='Minha jornada no React Native' />
            <StatusBar style='auto' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Grid>
                    <Button bgColor='#00ff9f' text='Fundamentos do React Native' />
                    <Button bgColor='#00ff9f' text='Expo e Expo CLI' />
                    <Button bgColor='#00ff9f' text='Estilização com StyleSheet' />
                    <Button bgColor='#00ff9f' text='Navegação' onPress={toNavigationScreen} />
                    <Button bgColor='#00ff9f' text='ScrollView' />
                    <Button bgColor='#00ff9f' text='FlatList' />
                    <Button bgColor='#f64348' text='Periféricos' />
                    <Button bgColor='#00ff9f' text='Styled Components' />
                    <Button bgColor='#00ff9f' text='Temas e Estilos Globais' />
                    <Button bgColor='#00ff9f' text='Consumos de API' onPress={toApiScreen} />
                </Grid>
            </ScrollView>
        </Container>
    );
};