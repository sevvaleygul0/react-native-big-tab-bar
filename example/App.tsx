import React from 'react';
import {View} from 'react-native';
import ImageTabBar from 'react-native-big-tab-bar';

const tabs = [
  {
    id: 0,
    text: 'Monday',
    number: 8,
  },
  {
    id: 1,
    text: 'Tuesday',
    image: {
      uri:
        'https://image.winudf.com/v2/image/Y29tLnNnbS5iZWFjaHdhbGxwYXBlcmhkX3NjcmVlbnNob3RzXzJfZjRhOGQ4MzQ/screen-2.jpg?fakeurl=1&type=.jpg',
    },
  },
  {
    id: 2,
    text: 'Wednesday',
    number: 14,
  },
  {
    id: 3,
    text: 'Thursday',
    image: {uri: 'https://images2.alphacoders.com/468/4682.jpg'},
  },
  {
    id: 4,
    text: 'Friday',
    image: {uri: 'https://images2.alphacoders.com/439/439779.jpg'},
  },
  {
    id: 5,
    text: 'Saturday',
    image: {
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeNdKCmO35y2RMPWixGFmuHSv1nCq8b6-Dqw&usqp=CAU',
    },
  },
  {
    id: 6,
    text: 'Sunday',
    number: 5,
    image: {uri: 'https://images5.alphacoders.com/686/686355.jpg'},
  },
];

const App = () => {
  return (
    <View
      style={{
        marginTop: 200,
        height: 150,
      }}>
      <ImageTabBar textIsActive={true} tabs={tabs} />
    </View>
  );
};

export default App;
