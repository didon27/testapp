import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    header: {
        alignItems: 'center',
        marginBottom: 32.
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        marginVertical: 8
    },
    search: {
        color: 'black',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 4,
        paddingHorizontal: 16,
        marginHorizontal: 16
    },
    lists: {
        paddingHorizontal: 16
    },
    activeButton: {
        backgroundColor: Colors.blue,
        color: 'white'
    }
})