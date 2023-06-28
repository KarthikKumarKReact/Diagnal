import { useState, useMemo } from 'react'
import { FlatList, View } from 'react-native'
import CardTitle from '../../components/CardTitle/CardTitle'
import Header from '../../components/Header/Header'
import NothingFound from './NothingFound'
import { styles } from './style'

const CardList = ({ title, movies, getList }) => {
    const [searchText, setSearchText] = useState('')

    const filteredData = useMemo(() => {
        return movies.filter(({ name }) =>
            name.toLowerCase().includes(searchText.toLowerCase()))
    }, [movies, searchText])

    return (
        <View style={styles.container}>
            <Header
                title={title}
                onSearch={setSearchText}
            />
            <FlatList
                data={filteredData}
                renderItem={({ item }) => <CardTitle {...item} />}
                keyExtractor={(_, index) =>String(index)}
                numColumns={3}
                onEndReached={getList}
                onEndReachedThreshold={0.5}
                ListEmptyComponent={<NothingFound />}
                style={{ backgroundColor: '#050505', marginHorizontal: 6 }}
                columnWrapperStyle={styles.columnWrapperStyle}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CardList