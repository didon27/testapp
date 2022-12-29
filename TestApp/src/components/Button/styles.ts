import { StyleSheet } from "react-native";

import { Colors } from "~/theme/colors";

export default StyleSheet.create({
    container: {
        backgroundColor: '#ebeff2',
        flex: 1,
        margin: 4,
        paddingVertical: 8,
        borderRadius: 4,
        alignItems: 'center',
    },
    text: {
        color: Colors.black
    }
})