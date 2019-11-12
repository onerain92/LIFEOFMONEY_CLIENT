import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {getRecipientLists} from '../../api/index';
import {saveRecipientLists} from '../../actions/index';

const List = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const recipientLists = useSelector(state => state.recipientLists);

  useEffect(() => {
    getRecipientLists(user.id).then(data => {
      dispatch(saveRecipientLists(data.recipientLists));
    });
  }, []);

  const Recipient = ({recipientId, name, relation, spendMoney, receivedMoney}) => {
    return (
      <TouchableOpacity
        style={styles.recipientList}
        onPress={() =>
          props.navigation.navigate('ListDetails', {
            recipientId,
            name,
            relation,
          })
        }>
        <View>
          <Text>{relation}</Text>
          <Text>{name}</Text>
          <Text>준 돈</Text>
          <Text>{spendMoney}원</Text>
          <Text>받은 돈</Text>
          <Text>{receivedMoney}원</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recipientLists}
        renderItem={({item}) => (
          <Recipient
            recipientId={item._id}
            name={item.name}
            relation={item.relation}
            spendMoney={item.spendMoney}
            receivedMoney={item.receivedMoney}
          />
        )}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipientList: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
});

export default List;
