import { useState,useRef } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View ,Animated} from 'react-native'
import { images } from '../../assets/images'
import { styles } from './style'

const Header = ({ title, onSearch }) => {
    const [isSearch, setIsSearch] = useState(false)

    const toggleSearch = () => {
        if (isSearch) {
            onSearch('')
        }
        setIsSearch((v) => !v)
    }
    const moveAnimation = useRef(new Animated.Value(0)).current;
    const animate = () => {
      Animated.timing(moveAnimation, {
        toValue: 140,
        duration: 500
      }).start();
    }

    const shrink = () => {
        Animated.timing(moveAnimation, {
          toValue: 0,
          duration: 500
        }).start();
      }
    const getwidth=()=>{
        if(!isSearch){
            setIsSearch(!isSearch);
            animate();
        }else{
            setIsSearch(!isSearch);
            shrink();
            // setShow(!show);
        }
      }
    return (
        <View style={styles.container}>
            {!isSearch ?
                <>
                    <View style={styles.titleWrapper}>
                        <TouchableOpacity onPress={() => { }}>
                            <Image style={styles.icon} source={Number(images.back)} />
                        </TouchableOpacity>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.mr5} onPress={toggleSearch}>
                        <Image style={styles.icon} source={images.search} />
                    </TouchableOpacity>
                </>
                :
                <Animated.View  style={[styles.titleWrapper, styles.mr5]}>
                    <TextInput
                        placeholderTextColor='#00000'
                        placeholder='Search...'
                        style={{...styles.input,}}
                        onChangeText={onSearch}
                    />
                    <TouchableOpacity onPress={getwidth}>
                        <Image style={styles.icon} source={images.close} />
                    </TouchableOpacity>
                </Animated.View>
            }
        </View>
    )
}

export default Header
