import React from 'react';
import {
  Alert,
  FlatList,
  Linking,
  Platform,
  RefreshControl,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  colors,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../common/GlobalStyles';
import CustomLoader from '../../component/CustomLoader';
import CustomText from '../../component/CustomText';
import Header from '../../component/Header';
import WithAuthenticatedWrapper from "../../component/HOC's/withAuthenticatedWrapper";
import {
  useFetchStories,
  useFetchStoriesIds,
} from '../../services/queries/stories';

const Home = () => {
  const user = useSelector(state => state.user.userData);
  const getStatusBarHeight = () => {
    return Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
  };
  const {
    data: storiesIds,
    isFetchingNextPage,
    fetchNextPage,
  } = useFetchStoriesIds();

  const handleLoadMore = () => {
    if (!isFetchingNextPage) {
      fetchNextPage(); // Fetch next set of data for pagination
    }
  };

  const flattenedArray = React.useMemo(
    () => storiesIds?.pages?.flat(Infinity) ?? [],
    [storiesIds?.pages],
  ); // Flattens to a single array

  const {
    data: stories,
    isLoading,
    isError,
    refetch,
  } = useFetchStories(flattenedArray);

  const MemoizedCard = React.memo(({item}) => (
    <View style={styles.card}>
      <CustomText
        text={item.title}
        size={16}
        weight={800}
        color={colors.semi_dark_grey}
      />
      <CustomText
        text={`Score: ${item.score} | By: ${item.by}`}
        size={14}
        color={colors.text_grey}
        style={styles.meta}
      />
      <TouchableOpacity
        onPress={() => {
          if (item.url) {
            Linking.openURL(item.url);
          } else {
            Alert.alert('URL not available');
          }
        }}>
        <CustomText
          text="Read More"
          size={14}
          color={colors.dark_blue}
          style={styles.link}
        />
      </TouchableOpacity>
    </View>
  ));

  const renderItem = ({item}) => <MemoizedCard item={item} />;

  if (isLoading) {
    return (
      <View>
        <CustomLoader
          visible={isLoading}
          text="Please wait loading stories..."
        />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <CustomText
          text="Failed to load stories. Please try again."
          size={16}
          color={colors.error_red}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[styles.container1, {paddingTop: getStatusBarHeight()}]}>
        <Header title="Welcome" subtitle={user.username} />
        <FlatList
          data={stories}
          keyExtractor={item => item.id?.toString()}
          renderItem={renderItem}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
          ListFooterComponent={
            isFetchingNextPage ? (
              <CustomLoader
                visible={isLoading}
                text="Please wait loading new stories..."
              />
            ) : null
          }
          initialNumToRender={10} // Number of items rendered initially
          windowSize={5} // Number of items in memory outside of viewport
        />
      </View>
    </View>
  );
};

const HomeWithAuthenticatedWrapper = WithAuthenticatedWrapper(Home, true);

export default HomeWithAuthenticatedWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light_grey,
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(10),
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: pixelSizeHorizontal(10),
    marginTop: pixelSizeVertical(10),
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: pixelSizeHorizontal(15),
    paddingVertical: pixelSizeVertical(15),
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  meta: {
    marginBottom: 10,
  },
  link: {
    textDecorationLine: 'underline',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
