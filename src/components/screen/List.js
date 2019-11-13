import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {getRecipientLists} from '../../api/index';
import {saveRecipientLists} from '../../actions/index';
import {PlusIcon, MinusIcon} from '../../../assets/icons/Icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const List = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const recipientLists = useSelector(state => state.recipientLists);

  useEffect(() => {
    getRecipientLists(user.id).then(data => {
      dispatch(saveRecipientLists(data.recipientLists));
    });
  }, []);

  const Recipient = ({
    recipientId,
    name,
    relation,
    spendMoney,
    receivedMoney,
  }) => {
    return (
      <TouchableOpacity
        style={styles.touchSection}
        onPress={() =>
          props.navigation.navigate('ListDetails', {
            recipientId,
            name,
            relation,
          })
        }>
        <View style={styles.recipient}>
          <View style={styles.recipientInfo}>
            <Text style={styles.recipientRelation}>{relation}</Text>
            <Text style={styles.recipientName}>{name}</Text>
          </View>
          <View style={styles.moneyWrapper}>
            <View style={styles.spendMoneyBox}>
              <MinusIcon style={styles.minusIcon} />
              <Text style={styles.spendMoney}>{spendMoney * 0.0001}만원</Text>
            </View>
            <View style={styles.receivedMoneyBox}>
              <PlusIcon style={styles.plusIcon} />
              <Text style={styles.receivedMoney}>
                {receivedMoney * 0.0001}만원
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.recipientList}
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
    width: width,
  },
  touchSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e9ecef',
  },
  recipient: {
    flex: 1,
    flexDirection: 'row',
  },
  recipientInfo: {
    flex: 0.2,
    flexDirection: 'column',
    padding: 10,
  },
  recipientRelation: {
    paddingBottom: 10,
    textAlign: 'center',
    color: '#868e96',
  },
  recipientName: {
    textAlign: 'center',
    fontSize: 20,
  },
  moneyWrapper: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  spendMoneyBox: {
    flex: 0.4,
  },
  minusIcon: {
    paddingBottom: 30,
  },
  spendMoney: {
    textAlign: 'right',
    fontSize: 20,
    color: '#fa5252',
  },
  receivedMoneyBox: {
    flex: 0.4,
  },
  plusIcon: {
    paddingBottom: 30,
  },
  receivedMoney: {
    textAlign: 'right',
    fontSize: 20,
    color: '#00A67A',
  },
});

export default List;
