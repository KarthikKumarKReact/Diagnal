import { Image, Text, TouchableOpacity } from 'react-native'
import { images } from '../../assets/images'
import { styles } from './style'

const CardTitle = (item) => {

    return (
        <TouchableOpacity onPress={() => { }} style={styles.container}>
            <Image
                source={images[item['poster-image']] || images["poster10.jpg"]}
                style={styles.img}
            />
            <Text style={styles.name}>{item.name.length > 30 ? `${item.name.substring(0, 30)}...` : item.name}</Text>
        </TouchableOpacity>
    )
}

export default CardTitle