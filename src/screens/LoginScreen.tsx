import React, {Component, ReactNode} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {config} from '../config/config';

class LoginScreen extends Component {
  render(): ReactNode {
    return (
      <ScrollView style={styles.background}>
        <SafeAreaView>
          <StatusBar backgroundColor={config.statusbarColor} />
        </SafeAreaView>
        <Image
          source={require('../../assets/login_banner.png')}
          style={styles.banner_image}></Image>
        <Text style={styles.head_text}>Let's you in</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={config.greyColor}
          style={styles.text_field}></TextInput>
        <TextInput
          placeholder="Password"
          placeholderTextColor={config.greyColor}
          style={styles.text_field}></TextInput>
        <View style={styles.button}>
          <Text style={styles.button_text}>Sign In</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Text style={{color: config.whiteColor, marginRight: 10}}>
            Don't have an account
          </Text>
          <Text style={{color: config.blueColor}}>Sign Up</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: config.backgroundColor,
  },
  banner_image: {
    width: '100%',
    height: 400,
  },
  head_text: {
    fontSize: 28,
    fontWeight: '600',
    color: config.whiteColor,
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 24,
  },
  text_field: {
    backgroundColor: config.whiteColor,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
  },
  button: {
    backgroundColor: config.blueColor,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 10,
  },
  button_text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: config.whiteColor,
  },
});

export default LoginScreen;
