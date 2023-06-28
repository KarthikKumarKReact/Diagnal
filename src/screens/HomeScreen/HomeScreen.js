import { useEffect, useState } from 'react'
import CardList from '../CardList/CardList'
import { getData } from '../../services/data'

const HomeScreen = () => {
    const [selectedGenre, setSelectedGenre] = useState('Romantic Comedy')
    const [movieList, setMovieList] = useState([])
    const [pagination, setPagination] = useState({ currPage: 0, totalItems: 0 })

    useEffect(() => {
        getList()
    }, [])

    const getList = async () => {
        const { currPage, totalItems } = pagination
        if ((totalItems === movieList.length) && currPage) {
            return
        }
        const data = await getData(currPage)
        const newData = data.page['content-items'].content
        const newCurrPage = parseInt(data.page['page-num-requested'])
        const newTotalItems = parseInt(data.page['total-content-items'])
        setPagination({ currPage: newCurrPage, totalItems: newTotalItems })
        setMovieList((movieList) => [...movieList, ...newData])
    }
    return (
        <>
            {selectedGenre ?
                <CardList title={selectedGenre} movies={movieList} getList={getList} />
                : null
            }
        </>
    )
}

export default HomeScreen