import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  Dimensions,
  Text,
  TextInput,
  Button,
  Picker,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import {createRecipient} from '../../api/index';
import {saveRecipientLists} from '../../actions/index';

const width = Dimensions.get('window').width;

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
            <View style={styles.modalContentWrapper}>
              <Text style={styles.modalText}>{modalContent}</Text>
              <View style={styles.confirmButton}>
                <Button
                  title="확인"
                  color="#ffffff"
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
            </View>
          </Modal>
        </View>
      ) : (
        <View style={styles.contentWrapper}>
          <View style={styles.nameWrapper}>
            <Text style={styles.nameText}>이름</Text>
            <TextInput
              style={styles.nameInput}
              placeholder="상대방 이름을 적어주세요."
              onChangeText={text => setRecipient(text)}
              value={recipient}></TextInput>
          </View>
          <View style={styles.relationWrapper}>
            <Text style={styles.relationText}>관계를 선택하세요.</Text>
            <Picker
              style={styles.relationInput}
              selectedValue={relation}
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
          <View style={styles.buttonWrapper}>
            <View style={styles.createButton}>
              <Button
                title="추가하기"
                color="#ffffff"
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
                }}
              />
            </View>
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
    backgroundColor: '#ffffff',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    padding: 100,
    backgroundColor: '#ffffff',
  },
  nameWrapper: {
    flex: 0.2,
    width: width * 0.8,
  },
  nameText: {
    paddingBottom: 10,
    fontSize: 20,
    color: '#495057',
  },
  nameInput: {
    width: '100%',
    padding: 15,
    fontSize: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#868e96',
  },
  relationWrapper: {
    flex: 0.6,
    width: width * 0.8,
    paddingTop: 20,
  },
  relationText: {
    paddingBottom: 10,
    fontSize: 20,
    color: '#495057',
  },
  relationInput: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingHorizontal: 10,
    paddingBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#868e96',
    borderRadius: 5,
  },
  buttonWrapper: {
    flex: 0.2,
    width: width * 0.8,
    paddingTop: 30,
  },
  createButton: {
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

export default CreateRecipient;
