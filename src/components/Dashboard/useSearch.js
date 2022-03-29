import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {filterArticlesAction} from '../../redux/actions/articlesActions'

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const articles = useSelector(state => state.articles.articles)
  const dispatch = useDispatch()

  const handleTerm = text => setSearchTerm(text)

  const handleSearch = () => {
    const filteredArticles = !searchTerm
      ? articles
      : articles.filter(
          article =>
            article.headline?.main
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            article.lead_paragraph
              .toLowerCase()
              .includes(searchTerm.toLowerCase()),
        )
    dispatch(filterArticlesAction(filteredArticles))
  }

  const clearSearch = () => setSearchTerm('')

  useEffect(() => {
    handleSearch()
  }, [searchTerm])

  return {searchTerm, handleTerm, clearSearch}
}

export default useSearch
