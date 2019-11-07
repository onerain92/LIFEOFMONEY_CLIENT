import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Modal from 'react-native-modal';
import questionInfos from '../../utils/QuestionInfos';

const CheckMoney = props => {
  const [money, setMoney] = useState(50000);
  const [currentStage, setCurrentStage] = useState(0);

  return (
    <View style={styles.container}>
      <Modal isVisible={true}>
        <View style={styles.content}>
          <Image
            source={{uri: questionInfos[currentStage].image}}
            style={styles.modalImage}
          />
          <Text style={styles.question}>
            {questionInfos[currentStage].question}
          </Text>
          <View>
            <Button title="네"></Button>
          </View>
          <View>
            <Button title="아니오"></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalImage: {
    width: 320,
    height: 240,
  },
  question: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CheckMoney;
