import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: '#ffffff99',
        fontSize: 18,
        marginLeft: 20,
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: '#ffffff',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
        borderWidth: 2,
        borderColor: "#ECECEC",
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        flex: 1,
        color: 'black',
        marginBottom: 5,
        marginHorizontal: 10,
        paddingHorizontal:10,
        marginVertical:5
    },
    mr5: {
        marginRight: 5
    }
})