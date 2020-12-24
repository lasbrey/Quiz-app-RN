import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './style';

const search = ({ navigation }) => {
  return (
    <ScrollView style={Styles.scroll}>
      <View style={Styles.body}>
        <View style={Styles.bh}>
          <View style={Styles.container}>
            <View style={Styles.website}>
              
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default search;