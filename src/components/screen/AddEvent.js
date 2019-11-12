import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput,
  Picker,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import {createEvent} from '../../api/index';
import {
  saveSpendingEventLists,
  saveReceivedEventLists,
} from '../../actions/index';

const AddEvent = props => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);

  const sort = props.navigation.getParam('sort', 'No sort');
  const recipientId = props.navigation.getParam('recipientId', 'No id');
  const name = props.navigation.getParam('name', 'No name');
  const relation = props.navigation.getParam('relation', 'No relation');

  const [eventType, setEventType] = useState('');
  const [money, setMoney] = useState(0);
  const [modalContent, setModalContent] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {isModal ? (
        <View>
          <Modal isVisible={true}>
            <View style={styles.modalContent}>
              <Text style={styles.content}>{modalContent}</Text>
              <Button
                style={styles.confirmButton}
                title="확인"
                onPress={() => {
                  if (isSuccess) {
                    setEventType('');
                    setMoney('');
                    setModalContent('');
                    setIsModal(false);
                    setIsSuccess(false);
                    props.navigation.navigate('ListDetails');
                  } else {
                    setEventType('');
                    setMoney('');
                    setModalContent('');
                    setIsModal(false);
                    setIsSuccess(false);
                    props.navigation.navigate('AddEvent');
                  }
                }}
              />
            </View>
          </Modal>
        </View>
      ) : (
        <View>
          <Text>{relation}</Text>
          <Text>{name}의</Text>
          <View>
            <Picker
              selectedValue={eventType}
              style={styles.pickerInput}
              onValueChange={itemValue => {
                setEventType(itemValue);
              }}>
              <Picker.Item label="결혼식" value="결혼식" />
              <Picker.Item label="돌잔치" value="돌잔치" />
              <Picker.Item label="잔치" value="잔치" />
              <Picker.Item label="장례식" value="장례식" />
            </Picker>
          </View>
          <View>
            <Text>금액</Text>
            <TextInput
              placeholder="금액을 적어주세요."
              onChangeText={text => setMoney(text)}
              value={money}
            />
          </View>
          <View>
            <Button
              style={styles.decisionButton}
              title="추가하기"
              onPress={() => {
                let amount;
                if (sort === 'give') {
                  amount = parseInt(money, 10) * -1;
                } else {
                  amount = parseInt(money);
                }

                createEvent(userId, recipientId, eventType, amount).then(
                  data => {
                    setIsModal(true);
                    if (data.successMessage) {
                      setIsSuccess(true);
                      setModalContent(data.successMessage);
                      dispatch(saveSpendingEventLists(data.spendingEventLists));
                      dispatch(saveReceivedEventLists(data.receivedEventLists));
                    } else {
                      setIsSuccess(false);
                      setModalContent(data.failureMessage);
                    }
                  },
                );
              }}
            />
          </View>

          {sort === 'give' ? (
            <View>
              <Button
                style={styles.decisionButton}
                title="금액 산정을 도와드립니다."
                onPress={() => props.navigation.navigate('DecisionMaker')}
              />
            </View>
          ) : (
            <View></View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  content: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  pickerInput: {
    width: 200,
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  decisionButton: {
    backgroundColor: '#FFE555',
  },
});

export default AddEvent;
