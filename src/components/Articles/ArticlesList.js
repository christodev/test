import {FlatList, ActivityIndicator, RefreshControl} from 'react-native'
import React, {useEffect, useState} from 'react'
import Article from './Article'
import {styles} from './articlesStyles'
import {COLORS} from '../../constants'

const ArticlesList = ({
  articles,
  loadMoreArtciles,
  loading,
  pullToRefresh,
  page,
}) => {
  const [pullTriggererd, setPullTriggered] = useState(false)

  const keyExtractor = item => Math.random().toString(16) + item._id
  const renderItem = ({item}) => <Article article={item} />

  const activateRefresh = () => {
    if (page === 0) return
    setPullTriggered(true)
    pullToRefresh()
  }
  const refreshControl = (
    <RefreshControl refreshing={pullTriggererd} onRefresh={activateRefresh} />
  )

  const ListFooterComponent = loading && page !== 0 && (
    <ActivityIndicator size={40} color={COLORS.primary} />
  )

  useEffect(() => {
    if (loading === true) setPullTriggered(false)
  }, [loading])

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={articles}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      onEndReached={loadMoreArtciles}
      refreshControl={refreshControl}
      ListFooterComponent={ListFooterComponent}
      maxToRenderPerBatch={3}
    />
  )
}

export default ArticlesList
