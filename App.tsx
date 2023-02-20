import React, { Component, ReactPropTypes } from 'react';
import { View, Text, Button, SafeAreaView ,StyleSheet} from 'react-native';
import { example, example2 } from './types';

class Counter extends Component<example,example2> {
  constructor(props : example) {
    super(props);
    this.state = {count : 0,test:"dfd" };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount = () => {
    if (this.state.count >= 10){
      this.setState({count: 10})  
    }else{
      this.setState({ count: this.state.count + 1 });
    }
  };

  decrementCount = () => {
    if (this.state.count <= 0){
      this.setState({count : 0})
    }else{
      this.setState({ count: this.state.count - 1 });
    }
    
  };

  render() {
    return (
      <SafeAreaView style = {styles.container} >
        <Text style = {styles.text}>Count: {this.state.count}</Text>
        <Button title="+(Increment)" onPress={this.incrementCount} />
        <Button title="-(Decrement)" onPress={this.decrementCount} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dd9e7b',
  },
  text:{
    fontSize: 50,

  }
})

export default Counter;