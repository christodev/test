import {StyleSheet} from 'react-native'
import {COLORS, FONTS} from '../../constants'
export const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 15,
    paddingBottom: 50,
    paddingTop: 10,
    marginTop: 10,
  },

  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articleTitle: {
    fontFamily: FONTS.medium,
    color: COLORS.primary,
    fontSize: 15,
    flex: 0.9,
  },
  articleDate: {
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
  articleBody: {
    paddingTop: 20,
    fontFamily: FONTS.regular,
    color: COLORS.primary,
    lineHeight: 20,
    fontStyle: 'italic',
    color: '#212121',
  },
  articleKeywords: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  articleKeyword: {
    backgroundColor: COLORS.primary,
    padding: 8,
    color: '#fff',
    fontSize: 10,
    fontFamily: FONTS.regular,
    borderRadius: 8,
    margin: 5,
  },
  fallbackText: {
    marginTop: 5,
    fontFamily: FONTS.regular,
    fontSize: 13,
    fontStyle: 'italic',
  },
  sourceText: {
    fontFamily: FONTS.regular,
    color: COLORS.primary,
  },
})
