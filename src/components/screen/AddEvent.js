import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  Dimensions,
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
  saveRecipientLists
} from '../../actions/index';

const width = Dimensions.get('window').width;

const AddEvent = props => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);

  const sort = props.navigation.getParam('sort', 'No sort');
  const recipientId = props.navigation.getParam('recipientId', 'No id');
  const name = props.navigation.getParam('name', 'No name');
  const relation = props.navigation.getParam('relation', 'No relation');

  const [eventType, setEventType] = useState('');
  const [money, setMoney] = useState('0');
  const [modalContent, setModalContent] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {isModal ? (
        <View>
          <Modal isVisible={true}>
            <View style={styles.modalContentWrapper}>
              <Text style={styles.modalText}>{modalContent}</Text>
              <View style={styles.confirmButton}>
                <Button
                  title="확인"
                  color="#ffffff"
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
            </View>
          </Modal>
        </View>
      ) : (
        <View style={styles.contentWrapper}>
          <View style={styles.eventTypeWrapper}>
            <Text style={styles.eventTypeText}>행사를 선택하세요.</Text>
            <Picker
              style={styles.eventTypeInput}
              selectedValue={eventType}
              onValueChange={itemValue => {
                setEventType(itemValue);
              }}>
              <Picker.Item label="결혼식" value="결혼식" />
              <Picker.Item label="돌잔치" value="돌잔치" />
              <Picker.Item label="잔치" value="잔치" />
              <Picker.Item label="장례식" value="장례식" />
            </Picker>
          </View>

          <View style={styles.moneyWrapper}>
            <Text style={styles.moneyText}>금액</Text>
            <TextInput
              style={styles.moneyInput}
              placeholder="금액을 적어주세요."
              onChangeText={text => setMoney(text)}
              value={money}
            />
          </View>

          <View style={styles.createButtonWrapper}>
            <View style={styles.createButton}>
              <Button
                title="추가하기"
                color="#ffffff"
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
                        dispatch(
                          saveSpendingEventLists(data.spendingEventLists),
                        );
                        dispatch(
                          saveReceivedEventLists(data.receivedEventLists),
                        );
                        dispatch(saveRecipientLists(data.recipientLists));
                      } else {
                        setIsSuccess(false);
                        setModalContent(data.failureMessage);
                      }
                    },
                  );
                }}
              />
            </View>
          </View>

          {sort === 'give' ? (
            <View style={styles.decisionButtonWrapper}>
              <Text style={styles.decisionText}>얼마 낼지 어려우신가요?</Text>
              <View style={styles.decisionButton}>
                <Button
                  title="네! 도와주세요."
                  color="#ffffff"
                  onPress={() => props.navigation.navigate('DecisionMaker')}
                />
              </View>
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
    backgroundColor: '#ffffff',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    backgroundColor: '#ffffff',
  },
  eventTypeWrapper: {
    flex: 0.4,
    width: width * 0.8,
    marginBottom: 50,
  },
  eventTypeText: {
    paddingBottom: 10,
    fontSize: 20,
    color: '#495057',
  },
  eventTypeInput: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingHorizontal: 10,
    paddingBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#868e96',
    borderRadius: 5,
  },
  moneyWrapper: {
    flex: 0.15,
    width: width * 0.8,
    marginBottom: 15,
  },
  moneyText: {
    paddingBottom: 10,
    fontSize: 20,
    color: '#495057',
  },
  moneyInput: {
    width: '100%',
    padding: 15,
    fontSize: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#868e96',
  },
  createButtonWrapper: {
    flex: 0.1,
    width: width * 0.8,
    marginBottom: 40,
  },
  createButton: {
    padding: 10,
    backgroundColor: '#00A679',
    borderRadius: 5,
  },
  decisionButtonWrapper: {
    flex: 0.15,
    width: width * 0.8,
    paddingTop: 10,
  },
  decisionText: {
    paddingBottom: 10,
    fontSize: 20,
    color: '#495057',
  },
  decisionButton: {
    padding: 10,
    backgroundColor: '#00A679',
    borderRadius: 5,
  },
  modalContentWrapper: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 5,
  },
  modalText: {
    width: '60%',
    paddingBottom: 30,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  confirmButton: {
    width: '60%',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#00A679',
  },
});

export default AddEvent;
