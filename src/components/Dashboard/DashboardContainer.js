import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Dashboard from './Dashboard'
import {getArticlesRequest} from '../../api/axiosInstance'
import {logoutAction} from '../../redux/actions/authActions'
import {
  clearArticlesAction,
  getArticlesAction,
} from '../../redux/actions/articlesActions'
import useSearch from './useSearch'

const DashboardContainer = ({navigation}) => {
  const {clearSearch, handleTerm, searchTerm} = useSearch()

  const token = useSelector(state => state.auth.token)
  const allArticles = useSelector(state => state.articles.filteredArticles)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [pageNumber, setPageNumber] = useState(0)

  const logout = () => {
    dispatch(logoutAction())
    dispatch(clearArticlesAction())
    navigation.replace('Login')
  }

  const getAllArtices = async page => {
    setLoading(true)
    setError(null)
    try {
      const {data} = await getArticlesRequest(token, page)
      const articles = data.response.docs

      dispatch(getArticlesAction(articles))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const loadMoreArticles = () => {
    if (!searchTerm) setPageNumber(prev => prev + 1)
  }

  const pullToRefresh = () => {
    dispatch(clearArticlesAction())
    setPageNumber(0)
  }

  const tryAgain = () => getAllArtices(0)

  useEffect(() => {
    getAllArtices(pageNumber)
  }, [dispatch, pageNumber])

  return (
    <Dashboard
      articles={allArticles}
      loading={loading}
      error={error}
      logout={logout}
      loadMoreArtciles={loadMoreArticles}
      page={pageNumber}
      clearSearch={clearSearch}
      handleTerm={handleTerm}
      searchTerm={searchTerm}
      pullToRefresh={pullToRefresh}
      tryAgain={tryAgain}
    />
  )
}

export default DashboardContainer
