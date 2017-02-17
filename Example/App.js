import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import GoogleImagePicker from 'react-google-image-picker'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default class App extends Component {

  constructor() {
    super()

    this.onPressQueryImages = this.onPressQueryImages.bind(this)
    this.state = {
      query: '',
    }
  }

  onPressQueryImages() {
    GoogleImagePicker(this.state.query)().then((data) => {
      alert(JSON.stringify(data))
    })
  }

  render() {
    console.log(this.state)

    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(query) => this.setState({query})}
          value={this.state.query}
        />
        <Button
          onPress={this.onPressQueryImages}
          title='Query images'
          color='rgb(132, 21, 132)'
        />
      </View>
    )
  }
}
