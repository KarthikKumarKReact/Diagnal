import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../Utils/utils";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: horizontalScale(5),
        marginVertical: verticalScale(15),
        flex: 1,
    },
    img: {
        height: verticalScale(200),
        width: horizontalScale(110),
    },
    name: {
        color: '#808080',
        flex: 1,
        marginTop: 5
    }
})