import React from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you have MaterialCommunityIcons installed
import { useSelector } from 'react-redux'; // Assuming you have Redux integrated
import DateTimePickerModal from 'react-native-modal-datetime-picker'; // Assuming you have DateTimePickerModal installed

const { width, height } = Dimensions.get('window');

export default function Habitlist({ navigation }) {
  const habit = useSelector((state) => state.store.habitlist);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageView}>
            {/* Add your close button or other components here */}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>HABIT LIST</Text>
          </View>
          <View style={styles.imageView}>
            {/* Add your other components here */}
          </View>
        </View>
        <ScrollView>
          {habit.length > 0 ? (
            habit.map((habitItem, index) => (
              <View key={index} style={styles.shadowBox}>
                <View style={{ width: '85%', justifyContent: 'center', marginLeft: 20 ,marginVertical: 10,}}>
                  <Text style={{ fontSize: 20, marginBottom: 3 }}>{habitItem.name}</Text>
                  <Text style={{ fontSize: 15, color: '#565456' }}>{habitItem.description}</Text>
                </View>
              </View>
            ))
          ) : (
            <View style={{ color: '#565456',height: height*.80, alignItems: 'center', justifyContent: 'center', width: width }}>
              <MaterialIcons name="notes" size={60} color="#565456" />
              <Text style={{ textAlign: 'center', fontSize: 20 }}>No List</Text>
            </View>
          )}
        </ScrollView>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#e4fde2',
    alignItems: 'center',
  },
  header: {
    height: '7.5%',
    width: '100%',
    backgroundColor: '#7dcd98',
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageView: {
    width: 30,
    height: height * 0.08,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 10,
  },
  title: {
    alignItems: 'center',
    fontSize: 21,
    color: 'white',
    fontWeight: 'bold',
  },
  shadowBox: {
    marginVertical: 10,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:  width*.85,
    flexDirection:'row',
  },
});
