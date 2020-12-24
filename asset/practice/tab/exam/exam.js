import React, { useState } from 'react';
import { View, Text, ScrollView, Modal, } from 'react-native';
import { Checkbox, Button } from 'galio-framework';
import Styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';


const search = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={Styles.scroll}>
      <View style={Styles.body}>
        <View style={Styles.control}>
          {/* header*/}
          <View style={Styles.ctrl5}>
            <Text style={Styles.txt}>
              Jamb
          </Text>
          </View>
          <View style={Styles.ctrl}>
            <Icon name="calculator" onPress={() => { setModalVisible(true); }} size={25} color="green" />
          </View>
          <View style={Styles.ctrl2}>
            <Icon name="ellipsis-v" size={25} color="green" />
          </View>
        </View>
        <View style={Styles.head}>
          <Text style={Styles.head1}>Question 1<Text style={Styles.headsm}>/50</Text></Text>
        </View>
        <View style={Styles.que}>
          <Text style={Styles.question}>
            Is Daniel Momoh an idiot? Is Daniel Momoh an idiot?{'\n'}
            Is Daniel Momoh an idiot? Is Daniel Momoh an idiot?{'\n'}
            Is Daniel Momoh an idiot? Is Daniel Momoh an idiot?{'\n'}
            Is Daniel Momoh an idiot? Is Daniel Momoh an idiot?{'\n'}
            Is Daniel Momoh an idiot?{'\n'}
          </Text>
        </View>
        <View style={Styles.container}>
          <View style={Styles.item}>
            <Text>A</Text>
            <Checkbox style={Styles.checkb} color="success" label="Yes" />
          </View>
          <View style={Styles.item}>
            <Text>B</Text>
            <Checkbox style={Styles.checkb} color="success" label="No" />
          </View>
          <View style={Styles.item}>
            <Text>C</Text>
            <Checkbox style={Styles.checkb} color="success" label="Maybe" />
          </View>
          <View style={Styles.item}>
            <Text>D</Text>
            <Checkbox style={Styles.checkb} color="success" label="Definately" />
          </View>
        </View>
        <View style={Styles.btnc}>
          <Text style={Styles.btnp}>Prev</Text>
          <Text style={Styles.btns}>Submit</Text>
          <Text style={Styles.btnn}>Next</Text>
        </View>
        <View style={Styles.numb}>
          <Text style={Styles.numbs}>1</Text>
          <Text style={Styles.numbs}>2</Text>
          <Text style={Styles.numbs}>3</Text>
          <Text style={Styles.numbs}>4</Text>
          <Text style={Styles.numbs}>5</Text>
          <Text style={Styles.numbs}>6</Text>
          <Text style={Styles.numbs}>7</Text>
          <Text style={Styles.numbs}>8</Text>
          <Text style={Styles.numbs}>9</Text>
          <Text style={Styles.numbs}>10</Text>
          <Text style={Styles.numbs}>12</Text>
          <Text style={Styles.numbs}>13</Text>
          <Text style={Styles.numbs}>14</Text>
          <Text style={Styles.numbs}>15</Text>
          <Text style={Styles.numbs}>16</Text>
          <Text style={Styles.numbs}>17</Text>
          <Text style={Styles.numbs}>18</Text>
          <Text style={Styles.numbs}>19</Text>
          <Text style={Styles.numbs}>20</Text>
        </View>
        <View style={Styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={Styles.centeredView}>
              <View style={Styles.modalView}>
                <View style={Styles.display}>
                  <Text>0</Text>
                </View>
                <View style={Styles.num}>
                  <Text style={Styles.num2}>Del</Text>
                  <Text style={Styles.num2}>C</Text>
                  <Text style={Styles.num2}>+</Text>
                  <Text style={Styles.num2}>*</Text>
                  <Text style={Styles.num2}>/</Text>
                  <Text style={Styles.num2}>S</Text>
                  <Text style={Styles.num2}>9</Text>
                  <Text style={Styles.num2}>8</Text>
                  <Text style={Styles.num2}>7</Text>
                  <Text style={Styles.num2}>6</Text>
                  <Text style={Styles.num2}>5</Text>
                  <Text style={Styles.num2}>4</Text>
                  <Text style={Styles.num2}>3</Text>
                  <Text style={Styles.num2}>2</Text>
                  <Text style={Styles.num2}>1</Text>
                  <Text style={Styles.num2}>.</Text>
                  <Text style={Styles.num2}>0</Text>
                  <Text style={Styles.num2}>=</Text>
                </View>
                <Button color="success" onPress={() => { setModalVisible(!modalVisible);}}> Close</Button>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
}

export default search;