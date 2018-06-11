import React, { Component } from 'react'
import {View, Text} from 'react-native'
//import axios from 'axios'

class AlbumList extends Component {
  state = {
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
    data: responseJson
  })
})
.catch((error) => {
  console.error(error);
});
}

  render(){
    return  (
      <View>
        <Text>Album List!</Text>
        <Text>{this.state.data.body}</Text>
      </View>
    );
  }
}

export default AlbumList;