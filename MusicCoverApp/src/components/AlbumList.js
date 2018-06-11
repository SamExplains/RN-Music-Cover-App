import React, { Component } from 'react'
import {View, Text} from 'react-native'
//import axios from 'axios'

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
    return this.state.albums.map( albums => <Text>{albums.title}</Text> );
  }

  render(){
    console.log(this.state);
    return  (
      <View>
        {this.renderAlbums()}
        {/*<Text>Album List!</Text>*/}
        {/*<Text>{this.state.data.body}</Text>*/}
      </View>
    );
  }
}

export default AlbumList;