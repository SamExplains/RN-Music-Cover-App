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
  <View>
    <Header headerText={'Music Covers'}/>
    <AlbumList/>
  </View>
  );

//Render it to the device
AppRegistry.registerComponent('MusicCoverApp', () => App );
