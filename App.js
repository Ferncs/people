import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default class App extends React.Component {

    renderList(){
        const names = [
        'Goku',
        'Kuririn',
        'Vegeta',
        'Gohan' 
      ];
       const textElements = names.map(name => {
          return <Text key ={name}>{name}</Text>
        }
      );

      return textElements;
    }


  render() {
    return (
      <View>
        <Header title="Pessoas!"/> 
        { this.renderList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
