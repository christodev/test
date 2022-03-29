import {
  CLEAR_ARTICLES,
  FETCH_ARTICLES,
  FILTER_ARTICLES,
} from '../types/articlesTypes'
const initialState = {
  articles: [],
  filteredArticles: [],
}

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        filteredArticles: [...state.filteredArticles, ...action.payload],
        articles: [...state.articles, ...action.payload],
      }

    case CLEAR_ARTICLES:
      return {
        ...state,
        articles: [],
        filteredArticles: [],
      }

    case FILTER_ARTICLES:
      return {
        ...state,
        filteredArticles: [...action.payload],
      }

    default:
      return state
  }
}

export default articlesReducer
