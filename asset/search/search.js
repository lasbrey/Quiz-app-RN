/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Styles from './style';

const search = ({ navigation }) => {
  return (
    <ScrollView style={Styles.scroll}>
      <View style={Styles.body}>
        <View style={Styles.bh}>
          <View style={Styles.website}>
            <Text style={Styles.sch}>Rules</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default search;