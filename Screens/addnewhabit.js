import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Assuming you have MaterialCommunityIcons installed
import { Button } from '@rneui/themed';
import React, { useState } from 'react';
import Habitlist from './habitlist';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from './reducer/storeSlice';
import { RadioButton } from 'react-native-paper';

const { width, height } = Dimensions.get("window");

export default function Addnewhabit({ navigation }) {
  const habit = useSelector((state) => state.store.habitlist)
  const [checked, setChecked] = useState();
  const dispatch = useDispatch();
  const today = new Date();
  const day = today.getDate()+1
  const month = today.getMonth()+1
  const year = today.getFullYear()
  const currentDate = today.getMonth()+1 + "/" + today.getDate() + "/" + today.getFullYear()
  const tomorrowDate = today.getMonth()+1 + "/" + day + "/" + today.getFullYear()
  const [habitList, setHabitList] = useState({
    id: "",
    date: "",
    name: "",
    description: ""
  },
  );

  const handleSubmit = () => {
    console.log(habitList.date)
    if(habitList.name.length>0 && habitList.description.length>0){
      dispatch(ADD([...habit, habitList]))
      setHabitList({...habitList, 
        id: "",
        date: "",
        name: "",
        description: ""
      })
      setChecked('')
    }else{
      alert('Please select a day or input a habit')
    }
  }

  const checked1Submit= () => {
    setChecked('first')
    setHabitList({...habitList, date: currentDate})
  }

  const checked2Submit= () => {
    setChecked('second')
    setHabitList({...habitList, date: tomorrowDate})
  }


  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageView}>
          
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>ADD HABIT</Text>
          </View>
          <View style={styles.imageView}>
           
          </View>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Add New Habit</Text>
          <View style={styles.input1Container}>
            <TextInput
              style={styles.textInput}
              placeholder="Habit Name"
              value={habitList.name}
              onChangeText={(text)=> setHabitList({...habitList, name: text})}
            />
          </View>

          <View style={styles.input2Container}>
            <View style={styles.textInput}>
              <TextInput
                style={styles.textInput2}
                placeholder="Habit Description"
                multiline={true}  // gi true nako
                numberOfLines={4}
                value={habitList.description}
                onChangeText={(text)=> setHabitList({...habitList, description: text,id: Math.floor(Math.random() * 900) + 100})}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 30}}>
            <Text>Today</Text>
            <View style={{borderWidth: 1, backgroundColor: '#7dcd98', borderRadius: 50, width: 38, borderColor: '#7dcd98', marginLeft: 5, marginTop: 30, }}>
            <RadioButton
              value="first"
              status={ checked === 'first' ? 'checked' : 'unchecked' }
              onPress={checked1Submit}
              color='white'
            />
            </View>
          </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Tomorrow</Text>
        <View style={{borderWidth: 1, backgroundColor: '#7dcd98', borderRadius: 50, width: 38, borderColor: '#7dcd98', marginLeft: 5, marginTop: 30,}}>
          <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={checked2Submit}
            color='white'
          />
        </View>
        
      </View>
    </View>
       
        <Button
          title="Add Habit"
          loading={false}
          loadingProps={{ size: 'large', color: 'white' }}
          buttonStyle={{
            backgroundColor: '#31c48d',
            borderRadius: 20,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 21 }}
          containerStyle={{
            marginTop: height*.15,
            width: 170,
            marginVertical: 20,
            
          }}
          onPress={handleSubmit}
        />
        {/* Other components for the rest of the habit list UI */}
      </View>
      </TouchableWithoutFeedback>
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
    height: '7.5%',
    width: '100%',
    backgroundColor: '#7dcd98',
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  imageView: { //X exit
    width: 30,
    height: height*.08,
    flex: 2,
    justifyContent: 'center',
    alignItems: "center",
  },

  textContainer: { // in header text
    alignItems: "center",
    justifyContent: 'center',
    flex: 10,
  },

  title: {
    alignItems: "center",
    fontSize: 21,
    color: 'white',
    fontWeight: 'bold',
  },

  formContainer: { // white box container
    backgroundColor: 'white',
    padding: 20,
    marginTop: 30, // Add space from the header
    borderRadius: 20,
    width: width*.88
  },

  formTitle: { //add new habit
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input1Container: { // box inside
    marginBottom: 10,
    color:'#7dcd98', // DILI MO COLOR
    marginHorizontal: 1,
    width: width*.78
  },

  input2Container: { // box inside
    marginBottom: 10,
    color:'#7dcd98', // DILI MO COLOR
    marginTop: 10,
    width: width*.78
  },

  textInput: {  //habit name
    borderWidth: 1,
    borderColor: '#7dcd98',
    padding: 10,
    borderRadius: 8,
    height: 50,
    fontSize: 17,
  },
  textInput2: {  //habit description
    fontSize: 17,
    marginHorizontal: 10,
    marginStart: 1,
  },
  textInput3: {   // habit description
    borderWidth: 1,
    borderColor: '#7dcd98',
    borderRadius: 8,
    height: 50,
  },
});
