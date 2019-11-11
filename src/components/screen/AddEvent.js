import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const AddEvent = props => {
  const id = props.navigation.getParam('id', 'No id');
  const name = props.navigation.getParam('name', 'No name');
  const relation = props.navigation.getParam('relation', 'No relation');
  const [eventType, setEventType] = useState('');
  const [money, setMoney] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{relation}</Text>
      <Text>{name}의</Text>
      <View style={styles.noteEvent}>
        <RNPickerSelect
          style={styles.selectEventType}
          onValueChange={value => setEventType(value)}
          value={eventType}
          items={[
            {label: '결혼식', value: '결혼식'},
            {label: '돌잔치', value: '돌잔치'},
            {label: '잔치', value: '잔치'},
          ]}
        />
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
          onPress={() => console.log('추가하기 버튼 클릭')}
        />
      </View>
      <View>
        <Button
          style={styles.decisionButton}
          title="금액 산정을 도와드립니다."
          onPress={() => props.navigation.navigate('DecisionMaker')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteEvent: {
    flexDirection: 'row',
    width: 350,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
  selectEventType: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  decisionButton: {
    backgroundColor: '#FFE555',
  },
});

export default AddEvent;
