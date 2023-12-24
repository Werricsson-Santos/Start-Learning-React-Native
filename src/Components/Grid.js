import { View, StyleSheet } from "react-native";

export default function Grid({ children }) {
    return (
        <View style={styles.grid}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    }
})