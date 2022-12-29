import { StyleSheet } from "react-native";

import { Colors } from "~/theme/colors";

export default StyleSheet.create({
    listItem: {
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingTop: 4,
        justifyContent: 'center',
        height: 100
    },
    label: {
        color: Colors.grey
    }
})