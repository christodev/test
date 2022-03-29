import {Text, View, TouchableOpacity, Keyboard} from 'react-native'
import React, {memo} from 'react'
import {styles} from './dahsboardStyles'
import LoadingWrapper from '../UI/Loading/LoadingWrapper'
import {COLORS} from '../../constants'
import {Button, SearchBar} from '../UI'
import ArticlesList from '../Articles/ArticlesList'
import Fallback from '../UI/Fallback/Fallback'

const DISMISS_KEYBOARD = () => Keyboard.dismiss()

const Dashboard = ({
  articles,
  loading,
  error,
  logout,
  loadMoreArtciles,
  page,
  clearSearch,
  handleTerm,
  searchTerm,
  pullToRefresh,
  tryAgain,
}) => {
  return (
    <TouchableOpacity
      style={{flex: 1}}
      activeOpacity={1}
      onPress={DISMISS_KEYBOARD}>
      {loading && (
        <LoadingWrapper
          color={COLORS.primary}
          size={50}
          loadingText="Loading Articles..."
          page={page}
        />
      )}
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
          <Button
            buttonStyle={styles.logoutButton}
            activeOpacity={0.7}
            text="logout"
            textWhite
            isLogginOrLogout
            pressHandler={logout}
            iconName="log-out-outline"
          />
        </View>
        <SearchBar
          searchTerm={searchTerm}
          clearSearch={clearSearch}
          handleTerm={handleTerm}
        />

        {articles.length === 0 && !loading && (
          <Text style={styles.fallbackText}>No results!</Text>
        )}
        {!error ? (
          <>
            <ArticlesList
              articles={articles}
              loadMoreArtciles={loadMoreArtciles}
              loading={loading}
              page={page}
              pullToRefresh={pullToRefresh}
            />
          </>
        ) : (
          <Fallback
            fallbackText="An error occured!"
            action={{
              enabled: true,
              title: 'Try Again',
            }}
            onActionHandler={tryAgain}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default memo(Dashboard)
