import React, {Component} from 'react';

import{
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class Chat extends Component {
      constructor(){
         super();
         this.state = {
           name: 'Brad',
           showName: true,
           surname: 'johns'
         }
      }
     render(){
      let name = this.state.showName ? this.state.name : 'No name';
       return(
         <View style={style.myView}  nativeID="Chatting View">
           <TouchableHighlight
               onPress={() => { this.saveSign() } } >
             <Text style={style.myText}>
               {this.state.name}
             </Text>
          </TouchableHighlight>
          <TouchableHighlight
               onPress={() => { this.resetSign() } } >
             <Text>
                {this.state.surname}
             </Text>
          </TouchableHighlight>
         </View>
       )
     }

     saveSign() {

     }

     resetSign() {
          
     }
}

const style = StyleSheet.create({
   myView: {
       backgroundColor: 'grey'
   },
   myText: {
     color: 'red'
   }
});

AppRegistry.registerComponent('Chat', () => Chat);
