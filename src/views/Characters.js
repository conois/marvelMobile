import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, Alert} from 'react-native';

class CharactersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:false,
      characters :[
        {
          id:1,
          name:'3d-Man',
          thumbnail:
          {
            path:'https://www.writeups.org/wp-content/uploads/3D-Man-Marvel-Comics-Chandler-1',
            extension: 'jpg' 
          }
        }, 
        {
          id:2,
          name:'3d-Man',
          thumbnail:
          {
            path:'https://www.writeups.org/wp-content/uploads/3D-Man-Marvel-Comics-Chandler-1',
            extension: 'jpg' 
          }
        }, 
        {
          id:3,
          name:'3d-Man',
          thumbnail:
          {
            path:'https://www.writeups.org/wp-content/uploads/3D-Man-Marvel-Comics-Chandler-1',
            extension: 'jpg' 
          }
        }, 
        {
          id:4,
          name:'3d-Man',
          thumbnail:
          {
            path:'https://www.writeups.org/wp-content/uploads/3D-Man-Marvel-Comics-Chandler-1',
            extension: 'jpg' 
          }
        }
        ]
    };
  }

  static navigationOptions = {
    title: 'Characters',
  }

    // Fetching characters 
    /*
    componentWillMount(){
    const hash = '2e4570b44420410f26bfb798c1acba01'    
    let characters = fetch(`http://gateway.marvel.com/v1/public/characters?limit=12&apikey=ed06a9680bc5e5574b26c8bc4004d083&ts=unTime&hash=${hash}`)
    .then(response => response.json())
    .then( data => {
      return (
        this.setState( (prevState) => {
          return (
            {
              characters: data.data.results, 
              isLoading: false 
            }
          )
        })
      )
    })
    .catch( e => console.log(e))

  }
  */
 _keyExtractor = (item, index) => item.id;

 _onPressItem = (id) => {
    console.log("press", id)
  };

  _renderItem = ({item}) => (
    <View 
      style = {styles.image}
      onPress = {this._onPressItem}
      >
      <Image
        style = {{width:'100%', height:'90%',resizeMode: 'contain'}}
        source={{uri:`${item.thumbnail.path}.${item.thumbnail.extension}`}}
      />
      <View style={styles.description}>
        <Text style={{textAlign: 'center', color:'white'}}>{item.name}</Text>
      </View> 
    </View>
  )

  render() {
    if(this.state.isLoading){
      return (
        <View style={styles.load}>
          <ActivityIndicator/>
        </View>
      )
    }


    return (
      <FlatList
        numColumns={2}
        data={this.state.characters}
        renderItem = {this._renderItem}
        keyExtractor={this._keyExtractor}
      />

    )
    
  }

}

export default CharactersScreen;

const styles = StyleSheet.create({
    container: {
        flex:1, 
        flexDirection: 'column',
    }, 
    load :{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    wrapper :{
      flex:1, 
    },
    image: {
      flex:6,
      height: 200,
      marginBottom: 5,
    },
    description:{
      marginBottom: 20,
      backgroundColor: 'black'
    }

})