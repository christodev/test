import React, {memo, useCallback} from 'react'
import {Text, View, Linking, ScrollView} from 'react-native'
import Card from '../UI/Card/Card'
import {styles} from './articlesStyles'
import {truncateArticleBody} from './articleUtils'
const Article = ({article}) => {
  const formattedDate =
    article?.pub_date && new Date(article?.pub_date).toLocaleDateString()

  const openLink = url => async () => {
    await Linking.openURL(url)
  }
  const truncatedBody = useCallback(() => {
    return truncateArticleBody(article.lead_paragraph, 200)
  }, [article.lead_paragraph])

  return (
    <>
      {article?.lead_paragraph !== '' && (
        <Card>
          <View style={styles.articleHeader}>
            <Text style={styles.articleTitle}>{article.headline}</Text>
            {article?.pub_date && (
              <Text style={styles.articleDate}>{formattedDate}</Text>
            )}
          </View>
          <Text style={styles.fallbackText}>{article.byline}</Text>
          <Text style={styles.articleBody}>{truncatedBody()}</Text>

          <Text onPress={openLink(article.web_url)} style={styles.sourceText}>
            Read more
          </Text>
          {article.keywords.length !== 0 ? (
            <View style={styles.articleKeywords}>
              <Text style={styles.fallbackText}>Keywords:</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {article.keywords.map(({value}) => (
                  <Text
                    style={styles.articleKeyword}
                    key={Math.random().toString(16)}>
                    {value}
                  </Text>
                ))}
              </ScrollView>
            </View>
          ) : (
            <Text style={styles.fallbackText}>No keywords available</Text>
          )}
        </Card>
      )}
    </>
  )
}

export default memo(Article)
