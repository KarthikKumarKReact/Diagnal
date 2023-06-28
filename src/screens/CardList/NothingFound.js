import { View, Text } from 'react-native'
import { styles } from './style'

const NothingFound = () => {
    return (
        <View style={styles.nothingWrapper}>
            <Text style={[styles.text, styles.title]} >No Results Found</Text>
        </View>
    )
}

export default NothingFound