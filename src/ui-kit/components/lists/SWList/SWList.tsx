import React from 'react'
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native'
import { ISWListTypes } from './SWListTypes'
import styles from './SWListStyles'
import { PanelContentWaiting } from '@components'
import { getThemeColor } from '@utils'

/**
 * @return { JSX }
 * @param { ISWListTypes } props
 */
const SWList = (props: ISWListTypes) => {
  const {
    listItems,
    renderListItem,
    listEmptyComponent,
    isBounces = false,
    onRefresh,
    isRefreshing,
    isLoadingMore,
    onLoadMore,
    listStyles,
    contentContainerStyles,
    titleEmptyComponent,
    contentElementEmptyComponent,
  } = props

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={listItems?.length ? listItems : []}
      removeClippedSubviews={false}
      bounces={isBounces}
      renderItem={renderListItem}
      keyExtractor={(item, index) => `key-${index}`}
      contentContainerStyle={StyleSheet.flatten([
        styles.contentContainer,
        contentContainerStyles,
      ])}
      ListEmptyComponent={
        !isRefreshing
          ? listEmptyComponent || (
              <PanelContentWaiting
                title={titleEmptyComponent}
                contentElement={contentElementEmptyComponent}
              />
            )
          : null
      }
      ListFooterComponent={
        isLoadingMore && !isRefreshing ? (
          <View style={styles.refreshingIndicatorStyle}>
            <ActivityIndicator
              size="small"
              color={getThemeColor('ACTIVITY_INDICATOR')}
            />
          </View>
        ) : null
      }
      onEndReached={() => {
        if (!isRefreshing && !isLoadingMore && onLoadMore) {
          onLoadMore()
        }
      }}
      onEndReachedThreshold={0.3}
      style={listStyles}
      refreshControl={
        onRefresh && (
          <RefreshControl
            title={'Загрузка...'}
            refreshing={isRefreshing || false}
            onRefresh={onRefresh}
            colors={[getThemeColor('ACTIVITY_INDICATOR')]}
            tintColor={getThemeColor('ACTIVITY_INDICATOR')}
            titleColor={getThemeColor('ACTIVITY_INDICATOR')}
          />
        )
      }
    />
  )
}

export default SWList
