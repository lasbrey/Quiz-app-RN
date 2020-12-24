/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './style';

const homepage = ({navigation}) => {
  return (
    <ScrollView style={Styles.scroll}>
      <View style={Styles.body}>
        <View style={Styles.bh}>
          <View style={Styles.container}>
            <View style={Styles.item}>
              <Text
                style={Styles.itemstyle}
                onPress={() => navigation.navigate('Utme practice')}>
                <Icon name="newspaper-o" size={30} color="green" />
                {'\n'}
                Practice for UTME {'\n'}
                <Text style={Styles.info}> With over 10,000 questions</Text>
              </Text>
            </View>
            <View style={Styles.item}>
              <Text
                style={Styles.itemstyle}
                onPress={() => navigation.navigate('Rules')}>
                <Icon name="asterisk" size={30} color="green" />
                {'\n'}
                Jamb Examination rules {'\n'}
                <Text style={Styles.info}>
                  {' '}
                  Do's and dont's of the exam{' '}
                </Text>
              </Text>
            </View>
            <View style={Styles.item}>
              <Text
                style={Styles.itemstyle}
                onPress={() => navigation.navigate('Performance')}>
                <Icon name="line-chart" size={30} color="green" />
                {'\n'}
                Performance {'\n'}
                <Text style={Styles.info}> Monitor you Performance here</Text>
              </Text>
            </View>
            <View style={Styles.item}>
              <Text
                style={Styles.itemstyle}
                onPress={() => navigation.navigate('Literature')}>
                <Icon name="book" size={30} color="green" />
                {'\n'}
                UTME Literatures {'\n'}
                <Text style={Styles.info}>
                  {' '}
                  Summary of literature textbooks{' '}
                </Text>
              </Text>
            </View>
            <View style={Styles.item}>
              <Text
                style={Styles.itemstyle}
                onPress={() => navigation.navigate('School finder')}>
                <Icon name="building" size={30} color="green" />
                {'\n'}
                School Finder {'\n'}{' '}
                <Text style={Styles.info}>
                  Find a school that matches your taste{' '}
                </Text>
              </Text>
            </View>
            <View style={Styles.item}>
              <Text style={Styles.itemstyle}>
                <Icon name="globe" size={30} color="green" />
                {'\n'}
                Jamb {'\n'}
                <Text style={Styles.info}>
                  Link to the official Jamb Website{' '}
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={Styles.footer}>
          <View>
            <Text style={Styles.activate}>Activate</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default homepage;
