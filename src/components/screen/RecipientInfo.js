import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

function RecipientInfo(props) {
  const [recipient, setRecipient] = useState('');
  const [event, setEvent] = useState('');
  const [relation, setRelation] = useState('');

  return (
    <View style={styles.container}>
      <Text>저는</Text>
      <TextInput
        placeholder="상대방 이름을 적어주세요."
        onChangeText={text => setRecipient(text)}
        value={recipient}></TextInput>
      <Text>의</Text>
      <RNPickerSelect
        placeholder={{
          label: '행사를 선택하세요.',
          value: null,
        }}
        items={[
          {label: '결혼식', value: 'wedding'},
          {label: '돌잔치', value: 'firstBirthdayParty'},
          {label: '잔치', value: 'party'},
        ]}
        onValueChange={value => setEvent(value)}
        style={styles.pickerInput}
        value={event}
      />
      <Text>에 갑니다. {recipient}은 저의</Text>
      <RNPickerSelect
        placeholder={{
          label: '관계를 선택하세요.',
          value: null,
        }}
        items={[
          {label: '가족', value: 'family'},
          {label: '친구', value: 'friend'},
          {label: '친척', value: 'relative'},
          {label: '직장동료', value: 'colleague'},
          {label: '직장상사', value: 'boss'},
        ]}
        onValueChange={value => setRelation(value)}
        style={styles.pickerInput}
        value={relation}
      />
      <Text>입니다.</Text>
      <View style={styles.nextBtn}>
        <Button
          title="다음"
          onPress={() => props.navigation.navigate('CheckMoney')}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerInput: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  nextBtn: {
    backgroundColor: '#FFE555'
  }
});

export default RecipientInfo;
