import {
  CLEAR_ARTICLES,
  FETCH_ARTICLES,
  FILTER_ARTICLES,
} from '../types/articlesTypes'

const getCleanedArticles = articles => {
  const cleanedArticles = articles.map(article => {
    return {
      pub_date: article.pub_date,
      lead_paragraph: article.lead_paragraph,
      headline: article.headline?.main,
      web_url: article.web_url,
      keywords: article.keywords,
      byline: article.byline?.original,
    }
  })
  return cleanedArticles
}

export const getArticlesAction = articles => {
  const cleanedArticles = getCleanedArticles(articles)

  return {
    type: FETCH_ARTICLES,
    payload: cleanedArticles,
  }
}

export const clearArticlesAction = () => {
  return {
    type: CLEAR_ARTICLES,
  }
}

export const filterArticlesAction = filteredArticles => {
  const cleanedArticles = getCleanedArticles(filteredArticles)
  return {
    type: FILTER_ARTICLES,
    payload: cleanedArticles,
  }
}
