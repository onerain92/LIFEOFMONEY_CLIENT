import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button, Image} from 'react-native';
import Modal from 'react-native-modal';
import questionInfos from '../../utils/QuestionInfos';

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
              <View>
                <Text>{money}</Text>
              </View>
              <Button
                title="확인"
                onPress={() => {
                  props.navigation.navigate('AddEvent');
                }}
              />
            </View>
          ) : (
            <View>
              <View>
                <Button
                  title="네"
                  onPress={() => {
                    if (questionInfos[currentStage].yes.amount) {
                      setMoney(money + questionInfos[currentStage].yes.amount);
                    }
                    setCurrentStage(questionInfos[currentStage].yes.nextStage);
                  }}
                />
              </View>
              <View>
                <Button
                  title="아니오"
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

export default DecisionMaker;
