import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, Text, View, Image, StyleSheet, } from "react-native";
import { Button } from '@rneui/themed';

const { width, height } = Dimensions.get("window");

export default function Startpage({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Image
            source={require("../assets/DailyProgress.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Focus on building positive habits in life
          </Text>
          
          <Button
            title="Get Started"
            loading={false}
            loadingProps={{ size: 'large', color: 'white' }}
            buttonStyle={{
              backgroundColor: '#31c48d',
              borderRadius: 50,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
          containerStyle={{
             marginHorizontal: 50,
             height: 90,
             width: 150,
             marginVertical: 20,
        }}
        onPress={() => navigation.navigate('bottomtabs')}
            />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "white",
  },
  container2: {
    alignItems: "center",
    marginTop: height * 0.17,
  },
  image: {
    height: 142.3,
    width: 200,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    marginBottom: 200,
    color: '#398378',
  },
});