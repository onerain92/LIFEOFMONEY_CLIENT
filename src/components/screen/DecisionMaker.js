import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import questionInfos from '../../utils/QuestionInfos';

const width = Dimensions.get('window').width;

const DecisionMaker = props => {
  const [money, setMoney] = useState(50000);
  const [currentStage, setCurrentStage] = useState(0);
  const [isEndStage, setIsEndStage] = useState(false);

  useEffect(() => {
    checkEndStage();
  }, [currentStage]);

  const checkEndStage = () => {
    const length = questionInfos.length;
    if (currentStage >= length - 2) {
      setIsEndStage(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal isVisible={true}>
        <View style={styles.content}>
          <Image
            source={{uri: questionInfos[currentStage].image}}
            style={styles.modalImage}
          />
          <Text style={styles.question}>
            {questionInfos[currentStage].question}
          </Text>

          {isEndStage ? (
            <View>
              <Text style={styles.resultMoney}>{money * 0.0001}만원</Text>
              <View style={styles.confirmButton}>
                <Button
                  title="확인"
                  color="#ffffff"
                  onPress={() => {
                    props.navigation.navigate('AddEvent');
                  }}
                />
              </View>
            </View>
          ) : (
            <View style={styles.buttonWrapper}>
              <View style={styles.yesButton}>
                <Button
                  title="네"
                  color="#ffffff"
                  onPress={() => {
                    if (questionInfos[currentStage].yes.amount) {
                      setMoney(money + questionInfos[currentStage].yes.amount);
                    }
                    setCurrentStage(questionInfos[currentStage].yes.nextStage);
                  }}
                />
              </View>
              <View style={styles.noButton}>
                <Button
                  title="아니오"
                  color="#ffffff"
                  onPress={() => {
                    if (questionInfos[currentStage].no.amout) {
                      setMoney(money + questionInfos[currentStage].no.amout);
                    }
                    setCurrentStage(questionInfos[currentStage].no.nextStage);
                  }}
                />
              </View>
            </View>
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.6,
  },
  yesButton: {
    width: width * 0.2,
    padding: 3,
    borderRadius: 5,
    backgroundColor: '#00A679',
  },
  noButton: {
    width: width * 0.2,
    padding: 3,
    borderRadius: 5,
    backgroundColor: '#fa5252',
  },
  resultMoney: {
    fontSize: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
  confirmButton: {
    width: width * 0.3,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#00A679',
  },
});

export default DecisionMaker;
