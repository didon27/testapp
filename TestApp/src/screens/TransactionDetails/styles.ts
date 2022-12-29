import { StyleSheet } from "react-native";

import { Colors } from "~/theme/colors";

export default StyleSheet.create({
    listItem: {
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    label: {
        color: Colors.grey,
    },
    infoBlock: {
        marginBottom: 4
    },
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        padding: 16
    }
})