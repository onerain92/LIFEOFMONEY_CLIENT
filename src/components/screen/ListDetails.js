import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {AddIcon} from '../../../assets/icons/Icons';

const ListDetails = props => {
  const id = props.navigation.getParam('id', 'No id');
  const name = props.navigation.getParam('name', 'No name');
  const relation = props.navigation.getParam('relation', 'No relation');

  return (
    <SafeAreaView style={styles.container}>
      <Text>{relation}</Text>
      <Text>{name}</Text>

      <View style={styles.giveMoneyContainer}>
        <View>
          <Text>준 돈</Text>
          <View>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('AddEvent', {
                  id,
                  name,
                  relation,
                })
              }>
              <View style={styles.addEventButton}>
                <AddIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text>이벤트 추가한거 보여주는 히스토리 페이지</Text>
        </View>

        <View>
          <Text>
            총 지출한 금액에 대해 나중에 받을 돈 시세 계산해서 보여주는 페이지
          </Text>
        </View>
      </View>

      <View style={styles.receiveMoneyContainer}>
        <View>
          <Text>받은 돈</Text>
          <View>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('ReceiveEvent', {
                  id,
                  name,
                  relation,
                })
              }>
              <View style={styles.addEventButton}>
                <AddIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text>받은 돈 히스토리 보여주는 페이지</Text>
        </View>
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
  giveMoneyContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
  addEventButton: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  receiveMoneyContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ListDetails;
