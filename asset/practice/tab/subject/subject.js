/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Checkbox, Button } from 'galio-framework';
import Styles from './style';

const Subject = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <View style={Styles.contain}>
          <Checkbox style={Styles.checkb} color="success" label="Maths" />
          <Checkbox style={Styles.checkb} color="success" label="English" />
          <Checkbox style={Styles.checkb} color="success" label="Physics" />
          <Checkbox style={Styles.checkb} color="success" label="Chemistry" />
          <Checkbox style={Styles.checkb} color="success" label="Agriculture" />
          <Checkbox style={Styles.checkb} color="success" label="Accountaing" />
          <Checkbox style={Styles.checkb} color="success" label="Crk/Crs" />
          <Checkbox style={Styles.checkb} color="success" label="Irs/Irk" />
          <Checkbox style={Styles.checkb} color="success" label="Government" />
          <Checkbox style={Styles.checkb} color="success" label="History" />
          <Checkbox style={Styles.checkb} color="success" label="Biology" />
          <Checkbox style={Styles.checkb} color="success" label="Computer" />
          <Checkbox style={Styles.checkb} color="success" label="Commerce" />
        </View>

      </ScrollView>
      <View style={Styles.bttn}>
        <Button color="success" onPress={() => navigation.navigate('Exam')} style={Styles.button}>Continue</Button>
      </View>
    </View>
  );
};

export default Subject;
