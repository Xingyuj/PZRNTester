import React, {Component} from 'react';

import{
  View,
  Text,
  AppRegistry,
  Button
} from 'react-native';



export default class Home extends React.Component {

  static navigationOptions = {
     title: 'Welcome',
   };

     render(){
        const { navigate } = this.props.navigation;
       return(
         <View nativeID="Home View">
          <Text>
            Hello from Home JS
          </Text>
           <Button
             title="Go to Chat profile"
             onPress={() => navigate('Chat')}
           />
         </View>
       )
     }
}
AppRegistry.registerComponent('Home', () => Home);
