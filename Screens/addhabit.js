import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


const { width, height } = Dimensions.get("window");

export default function Addhabit({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="close" size={35} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>ADD HABIT</Text>
          </View>
          <View style={styles.imageView}>
           
           </View>
        </View>
        <TouchableOpacity style={styles.addButtonContainer}>
            <View style={styles.addButton}>
            <AntDesign name="pluscircleo" size={30} color="black" />
              <Text style={styles.addText}>Add New Habit</Text>
            </View>
        </TouchableOpacity>
        {/* Other components for the rest of the habit list UI */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "#e4fde2",
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

  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 10,
  },

  imageView: { // X exit
    width: 30,
    height: height*.08,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: { // Header title
    alignItems: 'center',
    fontSize: 21,
    color: 'white',
    fontWeight: 'bold',
  },

  addButtonContainer: {
    height: 70, // Adjust height as needed
    width: width*.88,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 20,
  },

  addButton: { // plus circle
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30
    
  },


  addText: { // Add new habit
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Match the header color
    marginLeft: 25,
  },
});
