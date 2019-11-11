import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Picker,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import {createRecipient} from '../../api/index';
import {saveRecipientLists} from '../../actions/index';

const CreateRecipient = props => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const [recipient, setRecipient] = useState('');
  const [relation, setRelation] = useState('');
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
                    setRecipient('');
                    setRelation('');
                    setModalContent('');
                    setIsModal(false);
                    setIsSuccess(false);
                    props.navigation.navigate('ListStackNavigator');
                  } else {
                    setRecipient('');
                    setRelation('');
                    setModalContent('');
                    setIsModal(false);
                    setIsSuccess(false);
                    props.navigation.navigate('CreateRecipient');
                  }
                }}
              />
            </View>
          </Modal>
        </View>
      ) : (
        <View>
          <View>
            <Text>이름</Text>
            <TextInput
              placeholder="상대방 이름을 적어주세요."
              onChangeText={text => setRecipient(text)}
              value={recipient}></TextInput>
          </View>
          <View>
            <Text>관계를 선택하세요.</Text>
            <Picker
              selectedValue={relation}
              style={styles.pickerInput}
              onValueChange={itemValue => {
                setRelation(itemValue);
              }}>
              <Picker.Item label="가족" value="가족" />
              <Picker.Item label="친구" value="친구" />
              <Picker.Item label="친척" value="친척" />
              <Picker.Item label="직장동료" value="직장동료" />
              <Picker.Item label="직장상사" value="직장상사" />
            </Picker>
          </View>
          <View style={styles.createButton}>
            <Button
              title="추가하기"
              onPress={() => {
                createRecipient(userId, recipient, relation).then(data => {
                  setIsModal(true);
                  if (data.successMessage) {
                    setIsSuccess(true);
                    setModalContent(data.successMessage);
                    dispatch(saveRecipientLists(data.recipientLists));
                  } else {
                    setIsSuccess(false);
                    setModalContent(data.failureMessage);
                  }
                });
              }}></Button>
          </View>
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
  pickerInput: {
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
  createButton: {
    backgroundColor: '#FFE555',
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
  confirmButton: {
    backgroundColor: '#FFE555',
  },
});

export default CreateRecipient;
