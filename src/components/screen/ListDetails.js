import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {getEvent} from '../../api/index';
import {
  saveSpendingEventLists,
  saveReceivedEventLists,
} from '../../actions/index';
import {AddIcon, EditIcon} from '../../../assets/icons/Icons';

const ListDetails = props => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const spendingEventLists = useSelector(state => state.spendingEventLists);
  const receivedEventLists = useSelector(state => state.receivedEventLists);
  const recipientId = props.navigation.getParam('recipientId', 'No id');
  const name = props.navigation.getParam('name', 'No name');
  const relation = props.navigation.getParam('relation', 'No relation');
  const [repayment, setRepayment] = useState(0);
  const [years, setYears] = useState([]);

  useEffect(() => {
    getEvent(userId, recipientId).then(data => {
      dispatch(saveSpendingEventLists(data.spendingEventLists));
      dispatch(saveReceivedEventLists(data.receivedEventLists));
    });
    calculateYear();
  }, []);

  const EventList = ({eventId, eventType, createdAt, money}) => {
    return (
      <View style={styles.spendingList}>
        <Text>{eventType}</Text>
        <Text>{createdAt.slice(0, 10)}</Text>
        <Text>{money}</Text>
        <TouchableOpacity>
          <EditIcon />
        </TouchableOpacity>
      </View>
    );
  };

  const calculateYear = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = 1; i < 11; i++) {
      years.push({label: `${currentYear + i}`, value: `${currentYear + i}`});
    }
    setYears(years);
  };

  const calculateCompoundInterest = value => {
    const interest = 0.02;
    const currentYear = new Date().getFullYear();
    const count = value - currentYear;
    const initialValue = 0;
    const totalSpendMoney = spendingEventLists.reduce(
      (accumulator, currentValue) => accumulator + currentValue.money,
      initialValue,
    );
    const repayment = Math.round(
      totalSpendMoney * Math.pow(1 + interest, count),
    );

    setRepayment(repayment);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>{relation}</Text>
        <Text>{name}</Text>

        <View style={styles.giveMoneyContainer}>
          <View>
            <Text>준 돈</Text>
            <View>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('AddEvent', {
                    sort: 'give',
                    recipientId,
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
            <FlatList
              style={styles.list}
              data={spendingEventLists}
              renderItem={({item}) => (
                <EventList
                  eventId={item._id}
                  eventType={item.eventType}
                  createdAt={item.created_at}
                  money={item.money}
                />
              )}
              keyExtractor={item => item._id}
            />
          </View>

          <View>
            <RNPickerSelect
              onValueChange={value => {
                calculateCompoundInterest(Number(value));
              }}
              items={years}
            />
            <Text>{repayment}</Text>
          </View>
        </View>

        <View style={styles.receiveMoneyContainer}>
          <View>
            <Text>받은 돈</Text>
            <View>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('AddEvent', {
                    sort: 'take',
                    recipientId,
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
          <FlatList
              style={styles.list}
              data={receivedEventLists}
              renderItem={({item}) => (
                <EventList
                  eventId={item._id}
                  eventType={item.eventType}
                  createdAt={item.created_at}
                  money={item.money}
                />
              )}
              keyExtractor={item => item._id}
            />
          </View>
        </View>
      </ScrollView>
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
  spendingList: {
    height: 100,
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
