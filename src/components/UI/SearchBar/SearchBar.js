import React from 'react'
import {Input} from '..'
import {View} from 'react-native'

const SearchBar = ({searchTerm, handleTerm, clearSearch}) => {
  return (
    <View>
      <Input
        isSearchField={true}
        iconColor="#fff"
        iconName="search"
        placeholder="Search Articles"
        clearIcon="close-sharp"
        value={searchTerm}
        clearSearch={clearSearch}
        onChange={handleTerm}
      />
    </View>
  )
}

export default SearchBar
