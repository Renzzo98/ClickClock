import React from 'react';
import {FlatList, View, Dimensions} from 'react-native';
import Post from '../../components/Post/index';
import posts from '../../../data/posts';

const Home = () => (
  <View>
    <FlatList
      data={posts}
      renderItem={({item}) => <Post post={item} />}
      showsVerticalScrollIndicator={false}
      snapToInterval={Dimensions.get('window').height - 130}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
    />
  </View>
);

export default Home;
