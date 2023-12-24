import { Text, StyleSheet } from "react-native";

export default function Title({text}) {
    return(
        <Text style={styles.title}>
            {text}
        </Text>
    );
};


const styles = StyleSheet.create({
    title: {
        borderBottomColor: '#121212',
        borderBottomWidth: 1,
        color: '#121212',
        fontSize: 24,
        alignSelf: 'center',
        paddingBottom: 8
    },
});