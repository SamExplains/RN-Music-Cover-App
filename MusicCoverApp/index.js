// import { AppRegistry } from 'react-native';
// import App from './App';
// 
// AppRegistry.registerComponent('MusicCoverApp', () => App);
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => (
  /*Flex 1 allows the component to expand the whole content area.*/
  <View style={{flex: 1}} >
    <Header headerText={'Music Covers'}/>
    <AlbumList/>
  </View>
  );

//Render it to the device
AppRegistry.registerComponent('MusicCoverApp', () => App );
