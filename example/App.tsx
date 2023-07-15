import React from 'react';
import {View} from 'react-native';
import BigTabBar, {ITabBar} from './lib/src/BigTabBar';

const tabs: ITabBar[] = [
  {
    id: 0,
    bottomText: 'Monday',
    innerText: '8',
  },
  {
    id: 1,
    bottomText: 'Tuesday',
    image: {
      uri: 'https://image.winudf.com/v2/image/Y29tLnNnbS5iZWFjaHdhbGxwYXBlcmhkX3NjcmVlbnNob3RzXzJfZjRhOGQ4MzQ/screen-2.jpg?fakeurl=1&type=.jpg',
    },
  },
  {
    id: 2,
    bottomText: 'Wednesday',
    innerText: '14',
  },
  {
    id: 3,
    bottomText: 'Thursday',
    image: {uri: 'https://images2.alphacoders.com/468/4682.jpg'},
  },
  {
    id: 4,
    bottomText: 'Friday',
    image: {uri: 'https://images2.alphacoders.com/439/439779.jpg'},
  },
  {
    id: 5,
    bottomText: 'Saturday',
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeNdKCmO35y2RMPWixGFmuHSv1nCq8b6-Dqw&usqp=CAU',
    },
  },
  {
    id: 6,
    bottomText: 'Sunday',
    innerText: '5',
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
      <BigTabBar tabs={tabs} />
    </View>
  );
};

export default App;
