import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
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

const width = Dimensions.get('window').width;

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
      <View style={styles.historyList}>
        <View style={styles.listBox}>
          <Text style={styles.eventType}>{eventType}</Text>
        </View>
        <View style={styles.listBox}>
          <Text style={styles.date}>{createdAt.slice(0, 10)}</Text>
        </View>
        <View style={styles.listBox}>
          <Text style={styles.money}>{money * 0.0001}만원</Text>
        </View>
        <View style={styles.editButton}>
          <TouchableOpacity>
            <EditIcon />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const calculateYear = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = 1; i < 11; i++) {
      years.push({label: `${currentYear + i}년`, value: `${currentYear + i}`});
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
      <View style={styles.spendMoneyContainer}>
        <View style={styles.spendMoneyWrapper}>
          <Text style={styles.spendMoneyText}>지출</Text>
          <View style={styles.addEventButton}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('AddEvent', {
                  sort: 'give',
                  recipientId,
                  name,
                  relation,
                })
              }>
              <AddIcon />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.spendMoneyHistoryWrapper}>
          {spendingEventLists.length > 0 ? (
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
          ) : (
            <View style={styles.noHistoryWrapper}>
              <Text style={styles.noHistory}>기록이 없습니다.</Text>
            </View>
          )}
        </View>

        <View style={styles.compoundInterestWrapper}>
          <View style={styles.yearSelector}>
            <RNPickerSelect
              placeholder={{label: '년도 선택', value: null}}
              onValueChange={value => {
                calculateCompoundInterest(Number(value));
              }}
              items={years}
            />
          </View>
          <Text style={styles.compoundInterestText}>에 돌려받는다면?</Text>
          <View style={styles.compoundInterestBox}>
            <Text style={styles.compoundInterest}>{repayment}원</Text>
          </View>
        </View>
      </View>

      <View style={styles.receivedMoneyContainer}>
        <View style={styles.receivedMoneyWrapper}>
          <Text style={styles.receivedMoneyText}>수입</Text>
          <View style={styles.addEventButton}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('AddEvent', {
                  sort: 'take',
                  recipientId,
                  name,
                  relation,
                })
              }>
              <AddIcon />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.receivedMoneyHistoryWrapper}>
          {receivedEventLists.length > 0 ? (
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
          ) : (
            <View style={styles.noHistoryWrapper}>
              <Text style={styles.noHistory}>기록이 없습니다.</Text>
            </View>
          )}
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
    backgroundColor: '#ffffff',
  },
  spendMoneyContainer: {
    position: 'relative',
    flex: 0.55,
    width: width,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ced4da',
  },
  spendMoneyWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#fa5252',
  },
  spendMoneyText: {
    padding: 10,
    fontSize: 20,
    marginLeft: 20,
    color: '#ffffff',
  },
  spendMoneyHistoryWrapper: {
    padding: 10,
  },
  historyList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  listBox: {
    flex: 0.25,
    paddingTop: 3,
  },
  eventType: {
    fontSize: 20,
    textAlign: 'center',
  },
  date: {
    fontSize: 15,
    textAlign: 'right',
  },
  money: {
    fontSize: 15,
    textAlign: 'right',
  },
  addEventButton: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  compoundInterestWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    width: width,
    bottom: 0,
    padding: 10,
    backgroundColor: '#f1f3f5',
  },
  yearSelector: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontSize: 20,
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  compoundInterestText: {
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 16,
  },
  compoundInterestBox: {
    position: 'absolute',
    top: '50%',
    right: '15%',
  },
  compoundInterest: {
    fontSize: 20,
    color: '#fa5252',
  },
  receivedMoneyContainer: {
    flex: 0.45,
    width: width,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ced4da',
  },
  receivedMoneyWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#00A67A',
  },
  receivedMoneyText: {
    padding: 10,
    fontSize: 20,
    marginLeft: 20,
    color: '#ffffff',
  },
  receivedMoneyHistoryWrapper: {
    padding: 10,
  },
  noHistoryWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25%',
  },
  noHistory: {
    fontSize: 20,
    color: '#adb5bd',
  }
});

export default ListDetails;
