import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import AlbumDetail from './AlbumDetail'
import MyJSONData from '../MusicCoverJSON/music_cover.json'
//import axios from 'axios'

console.log(MyJSONData);

class AlbumList extends Component {
  state = {
    albums: [],
    data: ''
  }
  componentWillMount = () => {
  fetch('https://rallycoding.herokuapp.com/api/music_albums', {
  method: 'GET'
  })
  .then((response)=> response.json())
  .then((responseJson) =>{
    console.log(responseJson);

    this.setState({
      albums: responseJson,
      data: responseJson
    })
  })
  .catch((error) => {
    console.error(error);
  });
  }

  renderAlbums(){
    return this.state.albums.map( album =>
      <AlbumDetail key={album.title} album={album} /> );
  }

  render(){
    console.log(this.state);
    return  (
      <ScrollView>
        {this.renderAlbums()}
        {/*<Text>Album List!</Text>*/}
        {/*<Text>{this.state.data.body}</Text>*/}
      </ScrollView>
    );
  }
}

export default AlbumList;