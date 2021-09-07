import React from 'react';
import {View} from 'react-native';
import Post from '../../components/Post/index';

const post1 = {
  id: 'p1',
  videoUri:
    'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
  user: {
    id: 'u1',
    username: 'heavyMikeChamp',
    userImage:
      'https://i.shgcdn.com/53034b80-435d-46f1-90ce-3cc22cfcc8aa/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
  },
  desc: "Hahahah Let's go man! Lift to the heavens!",
  song: 'NF - The Search',
  songImage:
    'https://i.shgcdn.com/53034b80-435d-46f1-90ce-3cc22cfcc8aa/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
  likes: 955,
  comments: 21,
  shares: 44,
};

const Home = () => (
  <View>
    <Post post={post1} />
  </View>
);

export default Home;
