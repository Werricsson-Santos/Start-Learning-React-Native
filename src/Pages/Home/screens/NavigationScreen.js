import { View, Text, StyleSheet } from "react-native";

export default function NavigationScreen() {
    return(
        <View style={styles.container}>
            <Text>Aula de navegação</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingTop: 80
    },
});