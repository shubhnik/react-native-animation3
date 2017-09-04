/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  PanResponder,
  Animated,
  ScrollView
} from 'react-native';

export default class responderProject extends Component {
  state={
    elx:0,
    ely:0,
    xPos:20,
    yPos:20,
    pan: new Animated.ValueXY(),
    height: new Animated.Value(0)
  };


  componentWillMount(){
    this._panResponder = PanResponder.create({

      /*onStartShouldSetPanResponder: (e, gestureState) => {
        return true;
        //alert(JSON.stringify(gestureState))
      },

      onMoveShouldSetPanResponder: (e, gestureState) => {
        return true;
      },*/

      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        alert(JSON.stringify(this.state.pan.x))
        this.state.pan.setOffset({x:this.state.pan.x._value, y:this.state.pan.y._value})
        //this.state.pan.setValue({x: 0, y: 0});
        //alert(JSON.stringify(this.state.pan))
      },

      onPanResponderRelease: (e, gestureState) => {
        this.state.pan.flattenOffset();
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ])
    })
  }

  render() {
    const headerHeight = this.state.height.interpolate({
      inputRange: [0, 180],
      outputRange: [250, 70],
      extrapolateRight: 'clamp'
    });

    const imageOpacity = this.state.height.interpolate({
      inputRange: [0, 100, 180],
      outputRange: [1,0.8,0],
      extrapolate: 'clamp'
    });

    const viewOpacity = this.state.height.interpolate({
      inputRange: [0,100,180],
      outputRange:[0,0.2,1],
      extrapolate:'clamp'
    });

    return (
      <View style={{flex:1}}>
        <ScrollView
        //bounces={false}
          scrollEventThrottle={15}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.height}}}]
          )}
        >
        <View style={{marginTop:250}}>
          <View style={{height:50,backgroundColor:'indigo'}}/>
          <View style={{height:50,backgroundColor:'cyan'}}/>
          <View style={{height:50,backgroundColor:'white'}}/>
          <View style={{height:50,backgroundColor:'black'}}/>
          <View style={{height:50,backgroundColor:'purple'}}/>
          <View style={{height:50,backgroundColor:'skyblue'}}/>
          <View style={{height:50,backgroundColor:'pink'}}/>
          <View style={{height:50,backgroundColor:'orange'}}/>
          <View style={{height:50,backgroundColor:'steelblue'}}/>
          <View style={{height:50,backgroundColor:'red'}}/>
          <View style={{height:50,backgroundColor:'indigo'}}/>
          <View style={{height:50,backgroundColor:'cyan'}}/>
          <View style={{height:50,backgroundColor:'white'}}/>
          <View style={{height:50,backgroundColor:'black'}}/>
          <View style={{height:50,backgroundColor:'purple'}}/>
          <View style={{height:50,backgroundColor:'green'}}/>
          <View style={{height:50,backgroundColor:'yellow'}}/>
          <View style={{height:50,backgroundColor:'blue'}}/>
          </View>
        </ScrollView>
        <Animated.View style={{width:'100%',position:'absolute',height:headerHeight}}>
          <Animated.Image
              style={{opacity:imageOpacity,height:headerHeight,width:'100%'}}
              source={require('./images/man_utd.jpg')}
              resizeMode='cover'
          />
          <Animated.View style={{opacity:viewOpacity,justifyContent:'center',alignItems:'center',position:'absolute',height:headerHeight,width:'100%',backgroundColor:'red'}}>
            <Text style={{color:'white',fontSize:20}}>SHUBHNIK SINGH</Text>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

AppRegistry.registerComponent('responderProject', () => responderProject);
