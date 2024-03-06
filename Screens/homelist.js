// import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity,Button, Modal, Pressable , Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons,AntDesign,MaterialIcons,Entypo  } from '@expo/vector-icons'; 
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from 'react-native-gesture-handler';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { DELETE } from './reducer/storeSlice';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

const { width, height } = Dimensions.get("window");

export default function Homelist({ navigation }) {
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const today = new Date();
  const currentDate =  today.getMonth()+1 + "/" + today.getDate() + '/' + today.getFullYear;
  const [selectedDate, setSelectedDate] = useState();
  const habit = useSelector((state) => state.store.habitlist); //kani na add for delete
  const test = habit.date
  const dispatch = useDispatch();    
  const [date, setDate] = useState(test)                     //kani na add for delete


  const handleDelete = (id) => {  //kani na add for delete
    dispatch(DELETE(id)); // Dispatch the deleteHabit action with the habitId
  };

  const matchingHabit = habit.filter((habit) => habit.date === date);

  const [fullDate, setFullDate] = useState({
    month: "",
    day: "",
    year: ""
  });

  

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {
  //   const month = date.getMonth() +1;
  //   const day = date.getDate();
  //   const year = date.getFullYear();
  //   const fullDate = month + "/" + day + '/' + year;
  //   setSelectedDate(fullDate);
  //   setFullDate({...fullDate, month: month, day: day, year: year});
  //   hideDatePicker();
  // };
  const handleConfirm = () => {
    if(selectedDate!==undefined){
      const test = selectedDate.format('M/D/YYYY')
      setDate(test)
      const day = selectedDate.format('D')
      const month = selectedDate.format('MMMM')
      const year = selectedDate.format('YYYY')
      setFullDate({...fullDate, month: month, day: day, year: year});
      setModalVisible(!modalVisible)
    }else{
      alert('Please Select a Date')
    }
    // hideDatePicker();
  };

  const getSelectedDateText = () => {
    const date = new Date();
    const month = today.getMonth() +1;
    const day = today.getDate();
    const year = today.getFullYear();
    // const today =  month + "/" + day + '/' + year;
    const yesterday = month + "/" + (day - 1) + '/' + year;
    const tomorrow = month + "/" + (day + 1) + '/' + year;
    const fullDates = fullDate.month + '-' + fullDate.day;
    const switchDate = selectedDate.format('D')
    const defaultDate = selectedDate.format('MMMM/DD')

    // if(fullDate.day === day){
    //   return "Today";
    // }else if(fullDate.day === day+1){
    //   return "Tomorrow";
    // }else if(fullDate.day === day-1){
    //   return "Yesterday";
    // }else {
    //   return fullDates;
    // }

    switch (fullDate.day) {
      case day:
        return "Today";
      case day + 1:
        return "Tomorrow";
      case day - 1:
        return "Yesterday";
      default:
        return fullDates;
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext}>
            {date !== undefined ? getSelectedDateText() : "Today"}
          </Text>
          <TouchableOpacity style={styles.headericon} onPress={() => setModalVisible(true)}>
            <EvilIcons name="calendar" size={70} color="black" />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Calendar has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ width: "100%", alignItems: 'center', flexDirection: 'row',justifyContent: 'center' }}>
              <Text style={{flex: 5}}>
                  
                </Text>
                <Text style={{flex: 7, alignItems: 'center', fontSize: 20, fontWeight: 'bold'}}>
                  Select Date
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <AntDesign name="close" size={18} color="white" />
                </Pressable>
              </View>
            <View style={{ padding: 15, paddingBottom: 0 }}>
              <DateTimePicker
                mode="single"
                date={selectedDate}
                onChange={(params) => setSelectedDate(params.date)}
                selectedItemColor= '#7dcd98'
              />
            </View>
            <View style={{marginBottom: 10}}>
              <Button title='Save' onPress={handleConfirm} color={'#7dcd98'}/>
            </View>
              
            </View>
          </View>
        </Modal>
  
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>DailyProgress</Text>
          <ScrollView>
            {matchingHabit.length > 0 ? (
              matchingHabit.map((habit, index) => (
                <View key={index} style={styles.shadowBox}>
                  <View style={{ marginVertical: 30, marginLeft:15}}>
                    <BouncyCheckbox
                        size={28}
                        fillColor="#7dcd98"
                        unfillColor="white"
                        iconStyle={{ borderColor: "white" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        // textStyle={{ fontFamily: "JosefinSans-Regular" }}
                        onPress={() => {}}
                    />
               </View>
               <View style={{width: width*.45, marginLeft: 7, justifyContent: 'center', marginVertical: 10}}>
                  {/* <Text>{habit.date}</Text> */}
                  <Text style={{fontSize: 20, marginBottom: 3, fontWeight: 'bold'}}>{habit.name}</Text>
                  {/* <Text>{habit.name}</Text> */}
                  <Text style={{fontSize: 15,color: '#565456'}}>{habit.description}</Text>
               </View>
                  <TouchableOpacity style={{justifyContent: 'center', marginHorizontal: 15}} onPress={() => handleDelete(habit.id)}>
                    <Entypo name="trash" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <View style={{ color: '#565456', marginTop: "40%", alignItems: "center" }}>
                <MaterialIcons name="notes" size={60} color="#565456" />
                <Text style={{ textAlign: 'center', fontSize: 20 }}>No Progress</Text>
              </View>
            )}
          </ScrollView>
        </View>
  
        {/* <View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "#e4fde2",
    alignItems: "center"
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },

  headertext: {
    flex: 5,
    alignItems: 'flex-start',
    padding: 20,
    fontSize: 30,
    marginVertical: 5,
    marginLeft: 20,
  },

  headericon: {
    flex: 5,
    alignItems: 'flex-end',
    padding: 20,
    marginRight: 20,
  },

  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
    borderRadius: 20,
    width: width * 0.88,
    height: height * 0.69,
  },

  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 14
  },

  addButtonContainer: {
    height: 60,
    width: width * 0.77,
    backgroundColor: '#31c48d',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 0,
    borderRadius: 15,
    marginTop: 8,
    marginLeft: 4,
  },

  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
  },

  addText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 25,
  },
    // shadowColor: 'black', // Black shadow
    // shadowOffset: { width: 0, height: 2 }, // Offset shadow 2px down
    // shadowOpacity: 0.4, // Set opacity to 25%
    // shadowRadius: 3, // Blur radius of 3px
    // elevation: 5, // For Android
    // // Other styles for your box
    // backgroundColor: 'white',
    // padding: 4,
    // width:  width*.77,
    // marginVertical: 8,
    // flexDirection:'row'
    shadowBox: {
      marginVertical: 8,
      marginStart: 2,
      padding: 4,
      backgroundColor: 'white',
      borderRadius: 20,
      shadowColor: 'grey',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 5,
      width:  width*.77,
      flexDirection:'row',
    },
    centeredView: {
      flex: 1,
      marginTop: height * .25,
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height: 'auto',
      width: width * .86
    },
    button: {
      borderRadius: 20,
      padding: 8,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#7dcd98',
      flex: 4
    },
    buttonClose: {
      backgroundColor: '#7dcd98',
      
    },

});
