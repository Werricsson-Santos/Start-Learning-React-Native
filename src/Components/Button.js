import { TouchableOpacity, Text } from "react-native";

export default function Button({ bgColor, onPress, text }) {
    return(
        <TouchableOpacity 
            style={{
                backgroundColor: bgColor,
                borderRadius: 16,
                marginTop: 16,
                marginRight: 16,
                padding: 16,
                width: '100%',
            }}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Text style={{ fontWeight: '700' }}> {text} </Text>
        </TouchableOpacity>
    );
}